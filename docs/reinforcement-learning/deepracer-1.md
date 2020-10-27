# Session 1 - Introduction 


## What is Reinforcement Learning? 

Reinforcement learning is a part of machine learning, which enables the model/machine to learn about its surroundings through its actions based on maximum reward mechanism. Reinforcement concept itself came from psychology, which is about conditioning based on rewards and punishments to get the desired results. This is quite different than the other machine learning domains, the supervised learning and unsupervised learning. 

Supervised learning uses labels as the guidances for the model to learn. Meanwhile, the unsupervised learning learns from the intrinsic features from the data without the human-annotated labels. The most distinguished differences from reinforcement learning are the reinforcement mechanism itself and the exploration-exploitation process, which do not exist in supervised or unsupervised learning.

## The Elements of Reinforcement Learning

![Elements](~@assets/images/rl_elements.png)

All the reinforcement learning has these basic elements:
- Agent: 
    The virtual car in simulation or the physical device (OpenVino AWS DeepRacer car).
- Action:
    The decision which the agent will choose. This is tightly related with the policy.
- Environment:
    The race track (coordinates in simulation) or the physical track.
- State:
    The condition of the agent which contains values. There are current state, previous state and future state.
- Reward:
    The incentives for particular behaviors. This can be a positive reward or negative reward (punishment).

As the main goal in reinforcement learning is to get the maximum rewards, there is a trade-off in reinforcement learning which is between the exploration and the exploitation. When the agent explores too much, it won't maximizes the reward as all actions might not give the maximum result. And when the agent exploits too much, it might not maximizes the right action. The agent should balances between exploration and exploitation.

![Learning](~@assets/images/rl_elements_learning.png)

In a bigger picture, the learning in reinforcement learning goes like this. The agent, given a policy, will choose an action towards its environment. Based on the actions, the agent will get the reward we have set prior. St   

## AWS DeepRacer simulator architecture
![Architecture](~@assets/images/rl_aws-deepracer-arch.png)


## AWS DeepRacer League in 2020!
![League](~@assets/images/rl_aws-deepracer-league.png)


* Disclaimer: All the images above is not made by me, it was taken from Donnie Prakoso AWS slides.