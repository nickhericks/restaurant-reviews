# Restaurant Reviews project
---

This project is part of Udacity's Front End Web Developer nanodegree program. Demonstrates knowledge object-oriented JavaScript.

## Project Overview

You have been provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. Your job is to update the code to resolve these issues while still maintaining the included functionality.

## Added functionality

- Responsiveness - Convert a static webpage to a mobile-ready web application that is responsive on different sized displays.
- Accessibility - Add accessibility features for screen reader use.
- Service Worker - Add a service worker to begin the process of creating a seamless offline experience for your users.

## Project Requirements

Udacity provided project rubric for students to ensure project is up to spec: [Student requirement details](https://review.udacity.com/#!/rubrics/1090/view)

## Useful resources

- [Google Developers - Service Workers: an Introduction](https://developers.google.com/web/fundamentals/codelabs/offline/)
- [Google Developers - Adding a Service Worker and Offline into your Web App](https://developers.google.com/web/fundamentals/primers/service-workers/?hl=en#update-a-service-worker)

## How to access this application

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

2. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.
3. Explore the provided code, and make start making a plan to implement the required features in three areas: responsive design, accessibility and offline use.
4. Write code to implement the updates to get this site on its way to being a mobile-ready website.

## Credits

- Original code provided by [Udacity](https://github.com/udacity/mws-restaurant-stage-1).
- Additional CSS, Aria accessibility features, and Service Worker integration for offline use added by Nick Hericks.
