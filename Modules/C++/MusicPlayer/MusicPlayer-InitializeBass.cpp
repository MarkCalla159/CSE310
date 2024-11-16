#include <iostream>
#include "bass.h"

int main() {
    // Inicializar BASS
    if (BASS_Init(-1, 44100, 0, 0, NULL)) {
        std::cout << "BASS inicializado correctamente." << std::endl;
    }
    else {
        std::cout << "Error al inicializar BASS: " << BASS_ErrorGetCode() << std::endl;
    }

    // Finalizar BASS
    BASS_Free();
    return 0;
}