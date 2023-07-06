using System;

class LongestCommonSubsequence
{
    static string FindLCS(string s1, string s2)
    {
        int m = s1.Length;
        int n = s2.Length;

        string lcs = "";

        for (int i = 0; i < m; i++)
        {
            for (int j = 0; j < n; j++)
            {
                string currentLcs = "";
                int p = i;
                int q = j;

                while (p < m && q < n && s1[p] == s2[q])
                {
                    currentLcs += s1[p];
                    p++;
                    q++;
                }

                if (currentLcs.Length > lcs.Length)
                    lcs = currentLcs;
            }
        }

        return lcs;
    }

    static void Main()
    {
        string s1 = "ABCDGH";
        string s2 = "AEDFHR";

        string lcs = FindLCS(s1, s2);

        Console.WriteLine("Longest Common Subsequence: " + lcs);
    }
}
