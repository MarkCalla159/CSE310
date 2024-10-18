// See https://aka.ms/new-console-template for more information
//Console.WriteLine("Hello, World!");

// First program en C#

//using System; // use classes
 //namespace sample1
 //{
   // class Program{
     //   static void Main(string[] args){
       //     Console.WriteLine("Hello my lady hello my honey");
        //}
    //}
 //}

//Variables in C# - Container which store data value

/*using System;
namespace sample2 {
    class Program
    {
        static void Main(string[] args){
            int a = 100;

            Console.WriteLine(a);
        }
    }
}

//Datatypes in C#
using System;
namespace sample3{
    class Program{
        static void Main(string[] args){
            int a =100;
            float b = 20.45f;
            char c ='A';
            string d ="Hello my Honey Hello my lady";
            double f = 30.4546;

            Console.WriteLine(a);
            Console.WriteLine(b);
            Console.WriteLine(c);
            Console.WriteLine(d);
            Console.WriteLine(f);
        }
    }
}
// TypeCasting in C# - Implicit (Small to large) - Explicit (you know)
using System;
namespace sample4{
    class Program{
        static void Main(string[] args){
           // int a = 10;
            //float b = a; //implicit conversion
            //explicit conversion

            float a= 10.334f;
            int b = (int)a;
            Console.WriteLine(a);
            Console.WriteLine(b);
        }
    }
}
//User Input

using System;

namespace sample5
{
  class Program {
    static void Main(string[] args){
        Console.WriteLine("Enter you name: ");
        string a = Console.ReadLine();

        Console.WriteLine("Enter your age: ");

        int b = Convert.ToInt32(Console.ReadLine());//Explicit Conversion
        Console.WriteLine(a);
        Console.WriteLine("Hello: a ", "Your age is: b");
    }
  }  
}

//Logical Operators in C# (AND && OR || NOT !)

using System;
namespace sample7{
    class Program{
        static void Main(string[] args){
            int a = 24;
            int b = 12;
            Console.WriteLine(a>b && a<b );
            Console.WriteLine(a>b || a<b );
            Console.WriteLine(!(a>b || a<b ));
        }
    }
}*/

// Using IF ELSE IN C#

using System;
namespace sample8{
    class Program{
        static void Main(string[] args){
            int a = 100;
            int b = 34;

            if (a>b){
                Console.WriteLine("a is greater than b");
            }

            else if(a==b){
                Console.WriteLine("a this is dont care xDD");
            }
            else {
                Console.WriteLine("b is more important");
            }
        }
    }
}