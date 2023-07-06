using System;

class LongestCommonSubsequence
{
    static string FindLCS(string s1, string s2)
    {
        int m = s1.Length;
        int n = s2.Length;

        string[,] lcs = new string[m + 1, n + 1];

        for (int i = 0; i <= m; i++)
        {
            for (int j = 0; j <= n; j++)
            {
                if (i == 0 || j == 0)
                    lcs[i, j] = "";
                else if (s1[i - 1] == s2[j - 1])
                    lcs[i, j] = lcs[i - 1, j - 1] + s1[i - 1];
                else
                    lcs[i, j] = (lcs[i - 1, j].Length > lcs[i, j - 1].Length) ? lcs[i - 1, j] : lcs[i, j - 1];
            }
        }

        return lcs[m, n];
    }

    static void Main()
    {
        string s1 = "ABCDGH";
        string s2 = "AEDFHR";

        string lcs = FindLCS(s1, s2);

        Console.WriteLine("Longest Common Subsequence: " + lcs);
    }
    }
