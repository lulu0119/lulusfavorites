# Edit distance and backtracking path

**Edit distance** is a quantitative measure of the difference between two strings, such as English words. It measures the minimum number of operations required to transform one string into another.  

In Levenshtein distance, any single character can be deleted, inserted, or substituted in either string, which is the most commonly used definition of edit distance. When edit distance is mentioned, it usually refers to Levenshtein distance.

## Definition
If we use $\left | a \right |$ and $\left | b \right |$ to represent the lengths of two strings $a$ and $b$, then their Levenshtein distance is $\operatorname{lev} _{a, b} (\left | a \right | ,\left | b \right | )$, which satisfies:
$$
\operatorname{lev} _{a, b} (i,j) = \begin{cases}
\begin{aligned}
&\max (i,j) \\
&\min \left\{
\begin{aligned}
&\operatorname{lev} _{a, b} (i-1,j) + 1 \\
&\operatorname{lev} _{a, b} (i,j-1) + 1 \\
&\operatorname{lev} _{a, b} (i-1,j-1) + 1 _{(a_i \neq b_j)}
\end{aligned}
\right.
\end{aligned}
\end{cases}
$$

Here, $1 _{(a_i \neq b_j)}$ is an indicator function. When $a_i = b_j$, its value is 0, and otherwise, it is equal to 1. $\operatorname{lev} _{a, b} (\left | a \right | ,\left | b \right | )$ represents the Levenshtein distance between the first $i$ characters of $a$ and the first $j$ characters of $b$. (Both $i$ and $j$ are 1-based indices.)

## Computation

Dynamic programming is often used as one of the solutions to this problem.

The following code demonstrates the implementation of the Levenshtein distance algorithm and backtracking for finding the operations to transform one string into another.
```python
import numpy as np

def levenshtein(str_a, str_b):
    """
    Calculates the Levenshtein distance between two strings and returns a list of operations to transform str_a into str_b.
    :param str_a: The first string.
    :param str_b: The second string.
    :return: A list of operations.
    """
    # Convert the strings to lowercase
    str_a = str_a.lower()
    str_b = str_b.lower()

    # Initialize the matrix with zeros
    matrix_ed = np.zeros((len(str_a) + 1, len(str_b) + 1), dtype=np.int32)

    # Fill in the first row and column of the matrix
    matrix_ed[0] = np.arange(len(str_b) + 1)
    matrix_ed[:, 0] = np.arange(len(str_a) + 1)

    # Fill in the rest of the matrix
    for i in range(1, len(str_a) + 1):
        for j in range(1, len(str_b) + 1):
            # Calculate the three distances
            dist_1 = matrix_ed[i - 1, j] + 1  # Deletion
            dist_2 = matrix_ed[i, j - 1] + 1  # Insertion
            dist_3 = matrix_ed[i - 1, j - 1] + (1 if str_a[i - 1] != str_b[j - 1] else 0)  # Replacement or equality

            # Choose the minimum distance
            matrix_ed[i, j] = np.min([dist_1, dist_2, dist_3])

    # Backtracking
    i = len(str_a)
    j = len(str_b)
    operations = []
    while i > 0 or j > 0:
        if i > 0 and j > 0 and matrix_ed[i, j] == matrix_ed[i - 1, j - 1] and str_a[i - 1] == str_b[j - 1]:
            # If the characters are equal and the distance came from equality, move diagonally
            i -= 1
            j -= 1
        else:
            if i > 0 and j > 0 and matrix_ed[i, j] == matrix_ed[i - 1, j - 1] + 1:
                # If the distance came from a replacement, move diagonally
                i -= 1
                j -= 1
                operation = f"Replacement {str_a[i]} with {str_b[j]} at position {i}"
            elif j > 0 and matrix_ed[i, j] == matrix_ed[i, j - 1] + 1:
                # If the distance came from an insertion, move left
                j -= 1
                operation = f"Insertion {str_b[j]} at position {i}"
            else:
                # If the distance came from a deletion, move up
                i -= 1
                operation = f"Deletion {str_a[i]} at position {i}"  
            operations.append(operation)

    # Reverse the list of operations and return it
    operations.reverse()
    return operations
```
To use the levenshtein function, you can call it with two strings as arguments, like this:
```python
str_a = "25abdfxx"
str_b = "abcdefg"
result = levenshtein(str_a, str_b)
for i, operation in enumerate(result):
    print(f"Step {i+1}: {operation}")
```
This will output the list of operations needed to transform **str_a** into **str_b**, along with the step number for each operation.

For more information on Levenshtein distance, see [Wikipedia][1].

[1]: https://en.wikipedia.org/wiki/Levenshtein_distance