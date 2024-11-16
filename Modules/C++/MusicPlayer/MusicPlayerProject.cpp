#include <iostream>
#include <filesystem>
#include <vector>
#include <string>
#include <bass.h> // BASS audio library for handling music playback

namespace fs = std::filesystem; // Access to filesystem - only for c++17 

//to manage music list
class MusicPlayer {
public:
    // Constructor to initialize music player with folder path, current index, stream, and playback state
    MusicPlayer(const std::string& folderPath) : currentIndex(0), stream(0), isPlaying(false) {
        loadMusicFiles(folderPath);
    }

    //Destructor to stop playback and BASS resources(free)
    ~MusicPlayer() {
        stop();
        BASS_Free();
    }
    //Initialize BASS audio library
    bool initialize() {
        return BASS_Init(-1, 44100, 0, 0, NULL);
    }

    // Load music files
    void loadMusicFiles(const std::string& folderPath) {
        try {
            // Iterate to find .mp3 files
            for (const auto& entry : fs::directory_iterator(folderPath)) {
                if (entry.path().extension() == ".mp3" || entry.path().extension() == ".wav") {
                    musicFiles.push_back(entry.path().string());
                }
            }
            if (musicFiles.empty()) {
                std::cerr << "Music Files doesn't found." << std::endl;
            }
        }
        //To catch errors and display error information
        catch (const std::filesystem::filesystem_error& e) {
            std::cerr << "File's System Error: " << e.what() << std::endl;
            std::cerr << "Route: " << e.path1() << std::endl;
            std::cerr << "Code Error: " << e.code() << std::endl;
        }
    }
    // Play or pause the current song
    void playPause() {
        if (stream == 0) {
            loadCurrentSong();
        }
        //Swtich to play and pause
        if (isPlaying) {
            BASS_ChannelPause(stream); //pause
            std::cout << "Paused." << std::endl;
        }
        else {
            BASS_ChannelPlay(stream, FALSE);//play
            std::cout << "Playing: " << musicFiles[currentIndex] << std::endl;
        }
        isPlaying = !isPlaying;
    }

    //Play next song
    void next() {
        stop();
        currentIndex = (currentIndex + 1) % musicFiles.size();//increment index
        loadCurrentSong();
        playPause(); // Start playing the next song
    }
    //Play previous song
    void previous() {
        stop();
        currentIndex = (currentIndex - 1) % musicFiles.size();//decrement index
        loadCurrentSong();
        playPause(); // Start playing the previous song
    }
    //Stop play music
    void stop() {
        if (stream != 0) {
            BASS_ChannelStop(stream);
            BASS_StreamFree(stream);
            stream = 0; //reset stream
            isPlaying = false; //reset playback
        }
    }

private:
    // Load the current song from the file
    void loadCurrentSong() {
        if (musicFiles.empty()) return; // return if no music files are loaded

        // Load the current song file as a stream
        stream = BASS_StreamCreateFile(FALSE, musicFiles[currentIndex].c_str(), 0, 0, 0);
        if (!stream) {
            std::cerr << "Error loading file: " << musicFiles[currentIndex] << std::endl;
        }
    }

    //Variables
    std::vector<std::string> musicFiles; // List of music file paths
    int currentIndex;                    // Index of the currently playing song
    HSTREAM stream;                      // BASS stream handle for current song
    bool isPlaying;                      // Flag to indicate if music is playing
};

// Main function for music player
int main() {
    std::string folderPath = "C:\\Users\\USER\\Music"; // Path to the music folder
    MusicPlayer player(folderPath); // Create MusicPlayer object with folder path

    // Initialize BASS library and check for errors
    if (!player.initialize()) {
        std::cerr << "BASS initialization error!" << std::endl;
        return 1;
    }

    char command; // Commands
    std::cout << "Commands: p = play/pause, v = previous, n = next, q = quit" << std::endl;

    // Command loop for user input
    while (true) {
        std::cout << "Enter command: ";
        std::cin >> command;

        if (command == 'p') {
            player.playPause();
        }
        else if (command == 'n') {
            player.next();
        }
        else if (command == 'v') {
            player.previous();
        }
        else if (command == 'q') {
            player.stop();
            break;
        }
    }

    return 0; // end
}