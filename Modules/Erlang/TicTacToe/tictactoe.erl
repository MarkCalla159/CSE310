-module(tictactoe).

% Export functions for creating a new game, making a play, and checking the game status
-export([new/0, play/4, check/1]).

% new/0 initializes a new Tic-Tac-Toe game board
new() ->
    io:format("Starting a new game.~n"),
    {undefined, undefined, undefined,
     undefined, undefined, undefined,
     undefined, undefined, undefined}.

% play/4 takes a player (`Who`), coordinates (X, Y), and the current game state (Game)
% and returns an updated game state with the new move
play(Who, X, Y, Game) ->  % To calculate the linear position in the tuple based on (X, Y) coordinates
    Position = (Y - 1) * 3 + X, % To place the player's mark (Who) in the specified position
    UpdatedGame = setelement(Position, Game, Who), % To print the move made by the player

    io:format("Player ~p played at position (~p, ~p).~n", [Who, X, Y]),
    display_game(UpdatedGame),
    UpdatedGame.

% check/1 examines the game state to determine if there’s a winner, draw, or if the game continues
check(Game) ->
    Result =
%Stretch Challenge Case Of 
        case Game of
            {x, x, x,
             _, _, _,
             _, _, _} -> {victory, x};

            {_, _, _,
             x, x, x,
             _, _, _} -> {victory, x};

            {_, _, _,
             _, _, _,
             x, x, x} -> {victory, x};

            {x, _, _,
             x, _, _,
             x, _, _} -> {victory, x};

            {_, x, _,
             _, x, _,
             _, x, _} -> {victory, x};

            {_, _, x,
             _, _, x,
             _, _, x} -> {victory, x};

            {x, _, _,
             _, x, _,
             _, _, x} -> {victory, x};

            {_, _, x,
             _, x, _,
             x, _, _} -> {victory, x};

            {o, o, o,
             _, _, _,
             _, _, _} -> {victory, o};

            {_, _, _,
             o, o, o,
             _, _, _} -> {victory, o};

            {_, _, _,
             _, _, _,
             o, o, o} -> {victory, o};

            {o, _, _,
             o, _, _,
             o, _, _} -> {victory, o};

            {_, o, _,
             _, o, _,
             _, o, _} -> {victory, o};

            {_, _, o,
             _, _, o,
             _, _, o} -> {victory, o};

            {o, _, _,
             _, o, _,
             _, _, o} -> {victory, o};

            {_, _, o,
             _, o, _,
             o, _, _} -> {victory, o};

            {A, B, C,
             D, E, F,
             G, H, I} when A =/= undefined, B =/= undefined, C =/= undefined,
                           D =/= undefined, E =/= undefined, F =/= undefined,
                           G =/= undefined, H =/= undefined, I =/= undefined ->
                draw;

            _ -> ok
        end,
    case Result of
        {victory, Player} ->
            io:format("Player ~p wins!~n", [Player]);
        draw ->
            io:format("The game is a draw.~n");
        ok ->
            io:format("Game continues.~n")
    end,
    Result.

% display_game/1 displays the current game board in a formatted way
display_game({A, B, C, D, E, F, G, H, I}) ->
    io:format("Game state:~n"),
    io:format("~p | ~p | ~p~n", [A, B, C]),
    io:format("---------~n"),
    io:format("~p | ~p | ~p~n", [D, E, F]),
    io:format("---------~n"),
    io:format("~p | ~p | ~p~n~n", [G, H, I]).