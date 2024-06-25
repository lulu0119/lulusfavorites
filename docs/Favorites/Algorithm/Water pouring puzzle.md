# Water pouring puzzle

The Water Pouring Puzzle, also known as the Water Jug Problem, is a classic puzzle that involves measuring a certain amount of water using two or more jugs of known capacities. The puzzle can be solved using graph traversal algorithms such as Breadth-First Search (BFS) or Depth-First Search (DFS).

Here is an example of solving the puzzle using Breadth-First Search (BFS):

```python
from collections import deque

def measure_water(x, y, z):
    queue = deque([(0, 0)])
    visited = set([(0, 0)])
    parent = {}

    while queue:
        jug1, jug2 = queue.popleft()

        if jug1 == z or jug2 == z or jug1 + jug2 == z:
            path = [(jug1, jug2)]
            while (jug1, jug2) in parent:
                jug1, jug2 = parent[(jug1, jug2)]
                path.append((jug1, jug2))
            path.reverse()
            return "Measured {} liters using the {}-liter jug and the {}-liter jug.\nPath: {}".format(z, x, y, path)

        # Fill jug1
        if (x, jug2) not in visited:
            queue.append((x, jug2))
            visited.add((x, jug2))
            parent[(x, jug2)] = (jug1, jug2)

        # Fill jug2
        if (jug1, y) not in visited:
            queue.append((jug1, y))
            visited.add((jug1, y))
            parent[(jug1, y)] = (jug1, jug2)

        # Empty jug1
        if (0, jug2) not in visited:
            queue.append((0, jug2))
            visited.add((0, jug2))
            parent[(0, jug2)] = (jug1, jug2)

        # Empty jug2
        if (jug1, 0) not in visited:
            queue.append((jug1, 0))
            visited.add((jug1, 0))
            parent[(jug1, 0)] = (jug1, jug2)

        # Pour from jug1 to jug2
        if jug1 + jug2 >= y and (jug1 - (y - jug2), y) not in visited:
            queue.append((jug1 - (y - jug2), y))
            visited.add((jug1 - (y - jug2), y))
            parent[(jug1 - (y - jug2), y)] = (jug1, jug2)
        elif jug1 + jug2 < y and (0, jug1 + jug2) not in visited:
            queue.append((0, jug1 + jug2))
            visited.add((0, jug1 + jug2))
            parent[(0, jug1 + jug2)] = (jug1, jug2)

        # Pour from jug2 to jug1
        if jug1 + jug2 >= x and (x, jug2 - (x - jug1)) not in visited:
            queue.append((x, jug2 - (x - jug1)))
            visited.add((x, jug2 - (x - jug1)))
            parent[(x, jug2 - (x - jug1))] = (jug1, jug2)
        elif jug1 + jug2 < x and (jug1 + jug2, 0) not in visited:
            queue.append((jug1 + jug2, 0))
            visited.add((jug1 + jug2, 0))
            parent[(jug1 + jug2, 0)] = (jug1, jug2)

    return "Cannot measure {} liters using the given jugs.".format(z)

x = 5  # Capacity of the x-liter jug
y = 3  # Capacity of the y-liter jug
z = 4  # Desired measurement

result = measure_water(x, y, z)
print(result)
```

The output of the code is:

```
Measured 4 liters using the 5-liter jug and the 3-liter jug.
Path: [(0, 0), (5, 0), (2, 3), (2, 0), (0, 2), (5, 2), (4, 3)]
```

This means that it is possible to measure 4 liters using a 5-liter jug and a 3-liter jug. The path taken to achieve this measurement is [(0, 0), (5, 0), (2, 3), (2, 0), (0, 2), (5, 2), (4, 3)].
