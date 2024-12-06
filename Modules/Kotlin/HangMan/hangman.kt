import kotlin.random.Random

fun displayHangman(tries: Int): String {
    // Function to display the hangman drawing
    val stages = listOf(
        """
           ------
           |    |
           O    |
          /|\   |
          / \   |
                |
        """,
        """
           ------
           |    |
           O    |
          /|\   |
          /     |
                |
        """,
        """
           ------
           |    |
           O    |
          /|\   |
                |
                |
        """,
        """
           ------
           |    |
           O    |
          /|    |
                |
                |
        """,
        """
           ------
           |    |
           O    |
           |    |
                |
                |
        """,
        """
           ------
           |    |
           O    |
                |
                |
                |
        """,
        """
           ------
           |    |
                |
                |
                |
                |
        """
    )
    return stages[tries] // Return the hangman stage corresponding to the remaining oportunities.
}

fun main() {
    // Words for the game.
    val words = listOf("python", "kotlin", "javascript", "java", "typescript", "library", "windows")
    //Random Word
    val word = words[Random.nextInt(words.size)]
    //Display the number of letters from the word selected
    val wordDisplay = MutableList(word.length) { '_' }
    val guessedLetters = mutableSetOf<Char>()
     // Maximum number of tries.
    var tries = 6

    println("Welcome to the Hangman game!")

    while (tries > 0 && wordDisplay.contains('_')) {
        println(displayHangman(tries)) // Display the current hangman stage.
        println("Word: ${wordDisplay.joinToString(" ")}") // Display the current state of the word.
        println("Guessed letters: $guessedLetters") // Display guessed letters so far.
        print("Guess a letter: ")

        //To validate the letter
        val input = readLine()?.lowercase()?.getOrNull(0)

        if (input == null || input !in 'a'..'z') {
            println("Please enter a valid letter.")
            continue
        }
        // Check if the letter has already been guessed.
        if (input in guessedLetters) {
            println("You already guessed that letter. Try another one.")
            continue
        }
        // Add the guessed letter
        guessedLetters.add(input)
         // Check if the guessed letter and reveal in the word
        if (input in word) {
            for (i in word.indices) {
                if (word[i] == input) {
                    wordDisplay[i] = input
                }
            }
            println("Well done! The letter '$input' is in the word.")
        } else {
             // Decrease tries if the guess is wrong.
            tries--
            println("Sorry, the letter '$input' is not in the word.")
        }
    }

     // Game result: Check if the player won or lost.
    if (wordDisplay.joinToString("") == word) {
        println("Congratulations! You guessed the word: $word")
    } else {
        println(displayHangman(tries))
        println("You lost! The word was: $word")
    }
}