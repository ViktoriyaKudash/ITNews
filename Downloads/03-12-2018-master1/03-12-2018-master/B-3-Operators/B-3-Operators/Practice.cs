using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace B_3_Operators
{
    public partial class Practice
    {
        /// <summary>
        /// B3-P1/5. NumbersAddition. Напишите алгоритм, который складывает два числа.
        /// </summary>
        public static void B3_P1_9_NumbersAddition()
        {
            Console.WriteLine("Введите число 1");
            int q = Convert.ToInt16(Console.ReadLine());
            Console.WriteLine("Введите число 2");
            int e = Convert.ToInt16(Console.ReadLine());
            int c = q + e;
            Console.WriteLine("Результат" + c);
        }

        /// <summary>
        /// B3-P2/9. CheckResultAddition. Изменить предыдущий алгоритм. 
        /// Пускай он теперь не выводит ответ сам. 
        /// А запрашивает ответ и потом проверяет его на правильность.
        /// </summary>
        public static void B3_P2_9_CheckResultAddition()
        {
            Console.WriteLine("Введите число 1");
            int t = Convert.ToInt16(Console.ReadLine());
            Console.WriteLine("Введите число 2");
            int y = Convert.ToInt16(Console.ReadLine());
            Console.WriteLine("Результат:");
            int c = Convert.ToInt16(Console.ReadLine());
            if (c == y + t)
            {
                Console.WriteLine("Правильно!");
            }
            else
            {
                Console.WriteLine("Неправильно!");

            }

        }

        /// <summary>
        /// B3-P3/9. CheckResultAdditionWithTips. Изменить предыдущий алгоритм. 
        /// Пускай он теперь выводит не только информацию правильно или не правильно, 
        /// но и дополнительно, 	ожидается число больше или меньше указанного.
        /// </summary>
        public static void B3_P3_9_CheckResultAdditionWithTips()
        {
            {
                Console.WriteLine("Введите число 1");
                int num1 = Convert.ToInt16(Console.ReadLine());
                Console.WriteLine("Введите число 2");
                int num2 = Convert.ToInt16(Console.ReadLine());
                Console.WriteLine("Результат:");
                int res = Convert.ToInt16(Console.ReadLine());
                if (res == num1 + num2)
                {
                    Console.WriteLine("Правильно!");
                }
                else if (res <= num1 + num2)
                {
                    Console.WriteLine("Должно быть больше!");
                }
                else if (res >= num1 + num2)
                {
                    Console.WriteLine("Должно быть меньше !");
                }
            }

        }

        /// <summary>
        /// B3-P4/9. CheckResultWithOperator. Изменить предыдущий алгоритм. 
        /// Пускай алгоритм теперь запрашивает оператор (+ или -).
        /// </summary>
        public static void B3_P4_9_CheckResultWithOperator()
        {

        }

        /// <summary>
        /// B3-P5/9. CheckResultWithAttemps. Изменить предыдущий алгоритм. 
        /// Пускай у пользователя будет 3 попытки чтобы решить эту задачу правильно
        /// </summary>
        public static void B3_P5_9_CheckResultWithAttemps()
        {
            Console.WriteLine("Введите число 1");
            int num1 = Convert.ToInt16(Console.ReadLine());
            Console.WriteLine("Введите число 2");
            int num2 = Convert.ToInt16(Console.ReadLine());
            Console.WriteLine("Результат:");
            int res = Convert.ToInt16(Console.ReadLine());
            if (res == num1 + num2)
            {
                Console.WriteLine("Правильно!");
            }
            else if (res <= num1 + num2)
            {
                Console.WriteLine("Должно быть больше!");
                Console.WriteLine("Результат:");
            }

            else if (res >= num1 + num2)
            {
                Console.WriteLine("Должно быть меньше !");
                Console.WriteLine("Результат:");
            }

        }

        /// <summary>
        /// B3-P6/9. FiveNumbersAddition. Изменить предыдущий алгоритм. 
        /// Пускай алгоритм складывает пять чисел вместо двух.
        /// </summary>
        public static void B3_P6_9_FiveNumbersAddition()
        {
            Console.WriteLine("Введите число 1");
            int num1 = Convert.ToInt16(Console.ReadLine());
            Console.WriteLine("Введите числа 2-5");
            int num2 = Convert.ToInt16(Console.ReadLine());
            int num3 = Convert.ToInt16(Console.ReadLine());
            int num4 = Convert.ToInt16(Console.ReadLine());
            int num5 = Convert.ToInt16(Console.ReadLine());

            Console.WriteLine("Результат:");
            int res = Convert.ToInt16(Console.ReadLine());
            if (res == num1 + num2 + num3 + num4 + num5)
            {
                Console.WriteLine("Правильно!");
            }
            else if (res <= num1 + num2)
            {
                Console.WriteLine("Должно быть больше!");
            }
            else if (res >= num1 + num2)
            {
                Console.WriteLine("Должно быть меньше !");

            }

        }

        /// <summary>
        /// B3-P7/9. NumbersResultWithInfoIfCorrect. Изменить предыдущий алгоритм. 
        /// В конце алгоритма выводить информацию была ли задача решена правильно.
        /// </summary>
        public static void B3_P7_9_NumbersResultWithInfoIfCorrect()
        {

        }

        /// <summary>
        /// B3-P8/9. CircleArea. Написать алгоритм, рассчитывающий площадь круга по заданному радиусу. 
        /// </summary>
        public static void B3_P8_9_CircleArea()
        {
            Console.WriteLine("Введите радиуc круга");
            int r = Convert.ToInt16(Console.ReadLine());
            double s;
            s = Math.PI * r;
            Console.WriteLine(" Площадь вашего круга = " + s);

        }

        /// <summary>
        /// B3-P9/9. CreaditCalculator.Написать программу - калькулятор кредита на 1 год.
        /// </summary>
        public static void B3_P9_9_CreaditCalculator()
        {
            Console.WriteLine("Введите сумму кредита ");
            int sum = Convert.ToInt16(Console.ReadLine());
            Console.WriteLine("Введите проценты кредита");
            double perс = Convert.ToInt16(Console.ReadLine());
            double perc1 = perс / 100;
            double prvyear = perc1 * sum;
            Console.WriteLine("ПРоцент в год  = " + prvyear, "руб");
            double Obsum = sum + prvyear;
            Console.WriteLine("Общая сумма выплат составит = " + Obsum, "руб");

            double moun = Obsum / 12;
            Console.WriteLine("Выплаты по месяцам =" + moun);

        }
    }
}
