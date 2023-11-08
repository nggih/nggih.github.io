---
title: "AWS DeepRacer - Session 3 - Reward Function"
summary: "Technicalities about reward function"
categories: ["Post","Blog",]
tags: ["deep-learning","reinforcement-learning","aws"]
#externalUrl: ""
#showSummary: true
date: 2020-11-10
draft: false
---

## How to simplified reward function?

<https://www.linkedin.com/pulse/aws-deepracer-tips-tricks-how-build-powerful-rewards-wong/>

<https://www.youtube.com/watch?v=az84Jd2_WH4>

As in the reward function windows in AWS Deepracer can not import other libraries and the it is too simple,

To build a complex reward function like regression or gaussian, we do the heavy lifting.

## How the reward function validation works?

It copies our reward function code to a Lambda Function

Library can be invoke from AWS DeepRacer Reward Function API. Reward functions makes call to API Gateway only

```python
import urllib.request
import urllib.parse
import json

def reward_function(params):
    url = '<https://xxxxx.execute-api.us-east-1.amazonaws.com/Prod/reward/>'
    query_string = urllib.parse.urlencode({"json": json.dumps(params)})
    url = url + "?" + query_string
    with urllib.request.urlopen(url) as response:
        response_text = response.read().decode('utf-8')
        result = json.loads(response_text)
    return float(result["reward"])
```

## Reward Function Example

Powerful rewards function with Photoshop
Color line tracking and reward based on colour

## Image Processing with Pillow

- using pillow

1. Crop a circle around the deepracer
2. Rotate the image to make x-axis becomes the heading direction
3. Extract RGB color points and return the failure reward if the number of color point is less than threshold

## Angle Calculation

- using sklearn and sympy geometry
- User linear regression from sklearn and get a regression line over all over all color points
- heading is x-axes, black line is the regression line and orange line represent the current steering angle. Convert the slop of regression line into degree and it is the target direction

```python
regression_ray = get_linear_regression_ray(color_points, params)
center = Point(full_range / 2, full_range / 2)
perpendicular_distance = float(regression_ray.distance(center).evalf())
print("perpendicular distance: ", str(perpendicular_distance))
target_direction = math.degrees(atan(regression_ray.slope))
steering_angle = params['steering_angle']
steering_ray = Ray(Point(full_range / 2, full_range / 2)), angle=math.radians(steering_angle))
angle_diff = target_dircetion - params['steering_angle']
```

## Distance Reward

use numpy and sympy to calculate the perpendicular distance of DeepRacer from the regression line and reduce the vqalue over Gaussian distribution as smoothing.

```python
def gaussian(x, mu, sig):
    return np.exp(-np.power(x-mu, 2.)/ (2 * np.power(sig, 2.)))
```

## Demo Workshop

AWS Cloud9
