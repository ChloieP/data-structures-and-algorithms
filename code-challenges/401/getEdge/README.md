# Find Edges
Given a business trip itinerary, and an Alaska Airlines route map, is the trip possible with direct flights? If so, how much will the total trip cost be?

## Challenge

Write a function based on the specifications above,which takes in a graph, and an array of city names. Without utilizing any of the built-in methods available to your language, return whether the full trip is possible with direct flights, and how much it would cost.

## Approach & Efficiency
* I critically read the challenge and then referred to lecture notes from a few days ago. I did a bit of research online and then began ideation. I wrote up my idea on the whiteboard.

* I believe the time and space complexity for graph is O(N+E).

## Solution

[Find Edge Diagram](./assets/edge_diagram.JPG)

## Post-Mortem
My original solution was inadquate and had to be revisted. The algorithm's logic was proper, but thought of too shallowly. This lead to a major refactor of the code due to the trickle down effect of algorithm being a poor basis for the pseudocode which became a pseudocode poor basis for the code. My code shows the new solution.

What I ultimately did was not consider the layered ``for`` loop needs that getEdge would require as I had to look not just the nodes, but the edges connecting them as well. In my algorithm, I had thought of this as a single step. My brain can think that complexly and it feels simple. The computer cannot do the same. From this experience, I am going to begin asking the question "Can this step be further reduced?" as I build my algorithms.
