using System; // For fundamental classes like Exception handling and basic types
using System.Windows.Forms; // To be able to use Windows Form Application (UI)
using System.IO;

namespace TicTacToe
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();//To iniciate the components
        }

        int count = 0; // Counter to keep track of turns (to alternate between players)

        void restart()
        {
            Application.Restart(); // This will restart the game
        }

        //To check if a player won the game
        void winner(string symbol)
        {
            //Winning Conditions
            if (button1.Text == symbol && button2.Text == symbol && button3.Text == symbol)
            {
                MessageBox.Show(symbol + " Awesome you did it great or maybe the other one sucks"); // To notify the winner
                restart(); // To restart after have a winner
            }
            else if (button4.Text == symbol && button5.Text == symbol && button6.Text == symbol)
            {
                MessageBox.Show(symbol + " Awesome you did it great or maybe the other one sucks");
                restart();
            }
            else if (button7.Text == symbol && button8.Text == symbol && button9.Text == symbol)
            {
                MessageBox.Show(symbol + " Awesome you did it great or maybe the other one sucks");
                restart();
            }
            else if (button1.Text == symbol && button5.Text == symbol && button9.Text == symbol)
            {
                MessageBox.Show(symbol + " Awesome you did it great or maybe the other one sucks");
                restart();
            }
            else if (button3.Text == symbol && button5.Text == symbol && button7.Text == symbol)
            {
                MessageBox.Show(symbol + " Awesome you did it great or maybe the other one sucks");
                restart();
            }
            else if (button1.Text == symbol && button4.Text == symbol && button7.Text == symbol)
            {
                MessageBox.Show(symbol + " Awesome you did it great or maybe the other one sucks");
                restart();
            }
            else if (button2.Text == symbol && button5.Text == symbol && button8.Text == symbol)
            {
                MessageBox.Show(symbol + " Awesome you did it great or maybe the other one sucks");
                restart();
            }
            else if (button3.Text == symbol && button6.Text == symbol && button9.Text == symbol)
            {
                MessageBox.Show(symbol + " Awesome you did it great or maybe the other one sucks");
                restart();
            }
        }

        //To handle the action when a button is clicked
        void fnsymbol(object senderobj)
        {
            string bttntxt = ((Button)senderobj).Text;
            if (bttntxt == "") //Button needs to be empty
            {
                //Alternate turns
                if (count % 2 == 0)
                {
                    ((Button)senderobj).Text = "O";

                }
                else
                {
                    ((Button)senderobj).Text = "X";
                }
                count++; // This will increment during the game
                winner("O");
                winner("X");
            }
            else
            {
                MessageBox.Show("Really?, Don't you know how to play this?");// To handle some errors
            }
        }
        //Action when a button is clicked
        private void button1_Click(object sender, EventArgs e)
        {
            fnsymbol(sender);
        }

        private void button2_Click(object sender, EventArgs e)
        {
            fnsymbol(sender);
        }

        private void button3_Click(object sender, EventArgs e)
        {
            fnsymbol(sender);
        }

        private void button4_Click(object sender, EventArgs e)
        {
            fnsymbol(sender);
        }

        private void button5_Click(object sender, EventArgs e)
        {
            fnsymbol(sender);
        }

        private void button6_Click(object sender, EventArgs e)
        {
            fnsymbol(sender);
        }

        private void button7_Click(object sender, EventArgs e)
        {
            fnsymbol(sender);
        }

        private void button8_Click(object sender, EventArgs e)
        {
            fnsymbol(sender);
        }

        private void button9_Click(object sender, EventArgs e)
        {
            fnsymbol(sender);
        }
        //To restart the game when there is a tie
        private void button10_Click(object sender, EventArgs e)
        {
            restart();
        }
        //Stretch Challenge - Not working
        private void button11_Click(object sender, EventArgs e)
        {
            using (StreamWriter writer = new StreamWriter("gameState.txt"))
            {
                writer.WriteLine(button1.Text);
                writer.WriteLine(button2.Text);
                writer.WriteLine(button3.Text);
                writer.WriteLine(button4.Text);
                writer.WriteLine(button5.Text);
                writer.WriteLine(button6.Text);
                writer.WriteLine(button7.Text);
                writer.WriteLine(button8.Text);
                writer.WriteLine(button9.Text);
                writer.WriteLine(count);  // Save the turn count
            }
        }

        private void button12_Click(object sender, EventArgs e)
        {
            if (File.Exists("gameState.txt"))
            {
                using (StreamReader reader = new StreamReader("gameState.txt"))
                {
                    button1.Text = reader.ReadLine();
                    button2.Text = reader.ReadLine();
                    button3.Text = reader.ReadLine();
                    button4.Text = reader.ReadLine();
                    button5.Text = reader.ReadLine();
                    button6.Text = reader.ReadLine();
                    button7.Text = reader.ReadLine();
                    button8.Text = reader.ReadLine();
                    button9.Text = reader.ReadLine();
                    count = int.Parse(reader.ReadLine());  // Load the turn count
                }
            }
        }
    }
}