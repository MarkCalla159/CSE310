% hello world program
%-module(sprint).
%-export([print_hello/0]).

%print_hello()->
%    io:fwrite("Hello everyone!\nThis is soo cool!\n").
% Functions // in sShell
%-export([triple/1]).
%triple(X) -> 3*X.
%-module(sprint).
%-export([triple/1]).

%triple(X) -> 3 * X.
%SORT TERMINAL - Same for letters
%1> List = [5,2,34,56,78].
%[5,2,34,56,78]
%2> SortedList = lists:sort(List).
%[2,5,34,56,78]
%-module(sprint).
%-export([bubble_sort/1]).

%bubble_sort([]) -> [];
%bubble_sort(List) ->
 %   bubble_pass(List, true).

%bubble_pass(List, Swapped) when Swapped ->
 %   NewList = bubble_pass_once(List),
 %   bubble_pass(NewList, NewList /= List);
%bubble_pass(List, false) -> List.

%bubble_pass_once([X] = List) -> List;

%bubble_pass_once([X, Y | Rest]) ->
 %   case X > Y of
  %      true -> [Y | bubble_pass_once([X | Rest])];
  %      false -> [X | bubble_pass_once([Y | Rest])]
  %  end.

%Terminal using VSCode function
%SortedList = sprint:bubble_sort([1,23,465,7,43,5]).                                                                                                           
%[1,5,7,23,43,465]
%-module(sprint).
%-export([add/1]).

%add(X) -> string:concat("Hello ", X).
%Logical Operators TERMINAL
%abc == def.
%false
%2> 4=/4.                                                                                                                                                         
%* 1:3: syntax error before: '/'
%2> 4=/=4.
%false
%element(3,{abc,uty,qiw,uwy,iuq}).                                                                                                                             
%qiw
-module(sprint).
%-export([run_examples/0]).

%run_examples() ->
    %% AND operator
 %   Result1 = true and true,
 %   Result2 = true and false,
 %   Result3 = false and false,
    %io:format("AND Results: ~p, ~p, ~p~n", [Result1, Result2, Result3]),

    %% ANDALSO operator (short-circuit)
    %Result4 = true andalso true,
    %Result5 = false andalso (1 / 0), % This will not cause an error
    %Result6 = false andalso false,
    %io:format("ANDALSO Results: ~p, ~p, ~p~n", [Result4, Result5, Result6]),

    %% OR operator
    %Result7 = true or false,
    %Result8 = true or true,
    %Result9 = false or false,
    %io:format("OR Results: ~p, ~p, ~p~n", [Result7, Result8, Result9]),

    %% ORELSE operator (short-circuit)
    %Result10 = true orelse (1 / 0), % This will not cause an error
    %Result11 = false orelse true,
    %Result12 = false orelse false,
    %io:format("ORELSE Results: ~p, ~p, ~p~n", [Result10, Result11, Result12]),

    %% NOT operator
    %Result13 = not true,
    %Result14 = not false,
    %io:format("NOT Results: ~p, ~p~n", [Result13, Result14]),

    %% XOR operator
    %Result15 = true xor false,
    %Result16 = true xor true,
    %Result17 = false xor false,
    %io:format("XOR Results: ~p, ~p, ~p~n", [Result15, Result16, Result17]).
    
  %CASE OF EXPRESSIONs
    %Pattern1 -> 
      %Expression1;
    %Pattern2 -> 
      %Expression2;
    %_ -> 
      %DefaultExpression
    %end.
-export([describe_number/1]).

describe_number(Number) ->
    case Number of
        1 -> "One";
        2 -> "Two";
        3 -> "Three";
        _ -> "Unknown number"
      end.
      
%-export([describe_point/1]).

%describe_point(Point) ->
 %   case Point of
  %      {0, 0} -> "Origin";
   %     {X, 0} -> io_lib:format("Point on X-axis at ~p", [X]);
    %    {0, Y} -> io_lib:format("Point on Y-axis at ~p", [Y]);
    %    {X, Y} -> io_lib:format("Point at (~p, ~p)", [X, Y])
     % end.