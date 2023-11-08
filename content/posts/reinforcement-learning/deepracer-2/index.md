---
title: "AWS DeepRacer - Session 2 - Markov Decision Process"
summary: "Reinforcement learning basics, discussing about Markov decision process"
categories: ["Post","Blog",]
tags: ["deep-learning","reinforcement-learning","aws"]
#externalUrl: ""
#showSummary: true
date: 2020-11-03
draft: false
---

{{< katex >}}

Markov decision process (MDP) is a mathematical formalization of a Markov framework, that is widely applies in reinforcement learning problem. The framework consists of agents, environment, actions, states, rewards, as we already introduce it a little bit in Session 1. In the beginning, there is an _agent_, everything outside the agent is an _environment_. The agent take an _action_, which will give the agent a _reward_ toward a _state_ from the environment. Then the agent will be in a new state. The sequence goes like this:

\\(S_0, A_0, R_1, S_1, A_1, R_2, S_2, A_2,...\\)

![MDP](images/mdp-1.png)
*Figure from Sutton and Barto, 2018*

To understand why the Markov Decision Process looks like this, let's dive on Markov property and Markov chain first.

## Markov Property and Markov Chain

Markov property is a property in that the possible value at the given state \\(t\\), depends only on the previous state and action, \\(t-1\\), not all earlier ones. This is the definition in the Reinforcement Learning book by Sutton and Barto, 2018. But it can also be stated as the current/present state (in \\(t\\)) influence the future state (in \\(t+1\\)), but the past state (\\(t-1\\)) will not influence the future as it has influenced only the present state.

Markov chain is a sequences of states that follows Markov property with transition probabilities. This transition probabilities gives us how likely it will go from one state to the next state. Let's check the example below.

![Markov Chain](images/markov-chain.png)
*Figure from Suman's slides on Markov Decision Process*

How to read this Markov chain graph? Let's take a look at the Cloudy state first, it has two transition probability which leads to the Rainy and the Windy state, with 0.7 and 0.3 probability, respectively. Notice that 0.7 + 0.3 is 1. Then we observe the other state, Rainy, which has transition probability 0.2 if it becomes the Cloudy state and 0.8 when it becomes the Rainy state again. Meanwhile, the Windy state has 1.0 transition probability to become a Rainy state.

## Markov Reward Process (MRP)

Markov reward process is just Markov chain with reward function. For example, the previous Cloudy state has 0.7 to be Rainy state in Markov chain. In this transition probability, we add the reward (\\(r\\)), let's say \\(r=1\\). It doesn't make any sense to reward weather states, but it can be applied to other cases like this virtual race car.

## Markov Decision Process

In Markov decision process (MDP), we add \\(action\\) in Markov reward process. The all elements of MDP are states, transition probabilities, reward function and actions. The action space in the AWS DeepRacer comprises of three things. First the action number which determines the output of the neurons in the model, for example 0, 1, ..., 14. Second, the steering which related with each action number, the degree of the carn turning, the maximum degree is 30 and the minimum is 0. Last, the speed of the steering which shows the velocity of the car, it goes from 0 to 4 m/s.

## Policy, Value Function

Policy \\(\mu\\) shapes how agent will behave in the particular environment, it chooses what action in each state to get the overall optimal policy. Then the agent will be rewarded after a series of iterations, but at the beginning, the agent would not know how to behave, so, it will choose random action before learning the action that gives the agent the most reward.

There are two policy, deterministic policy and stochastic policy. The deterministic policy maps the states for each action, but the stochastic policy maps the states into a probability distribution over action space, so each action space has their own probabilities. For example, Left (0.6), Right (0.2), Straight (0.2), as it a probability distribution, it should sums up to 1.

## Return and Discount Factor

A return \\(R\\) is a sum of the rewards for the agents after an episode, which is a sequence of states when it starts to its end. It is easy to calculate if the sequence is in discrete, meanwhile it is hard to sum when it is a continuous taks where it goes to infinity. Here, we will use discount factor to prevent it reaching infinity. This discount factor determines which rewards we prioritize, it can be the future or the immediate rewards. The small value close to 0 for immediate rewards and the higher value close to 1 for future rewards. As it is a discounting method for the rewards, it make the reward smaller and smaller for each state to emphasize the importance of the next reward. In the DeepRacer case, we should give the agent high value like above 0.9, so it focus on future rewards.

## Value Function

The value function or state value function is a function which collects all the rewards within the state. It will estimate how the expected rewards the agent gets in a given state. This can be estimated from the experience.

## References

1. Sutton and Barto. 2018. Reinforcement Learning: An Introduction. MIT Press.
