# Text-to-Speech Application

This is a simple web-based Text-to-Speech (TTS) application built using HTML, CSS, and JavaScript. It utilizes the powerful SpeechSynthesis API to convert typed text into spoken words with customizable speed and voice pitch.

## Features

- **Speech Synthesis**: Harnesses the robust SpeechSynthesis API, empowering the application to transform text into clear and natural-sounding speech.
- **Customizable Parameters**:
  - **Speed Control**: Adjust the speaking rate dynamically from a soothing 0.5x to a brisk 3x pace, ensuring flexibility and comfort in listening.
  - **Voice Pitch Modulation**: Tailor the pitch of the synthesized voice between a soothing bass and a bright alto, enhancing expressiveness and clarity.
- **Intuitive Playback Controls**:
  - **Play**: Seamlessly initiate or resume speech synthesis with a single click, delivering an immersive auditory experience.
  - **Pause**: Temporarily halt speech output, offering users control over playback flow and enhancing interaction dynamics.
  - **Stop**: Instantly terminate speech synthesis, providing immediate cessation of audio output for user convenience.
- **Tailwind CSS Styling**: Utilizes Tailwind CSS for responsive and efficient styling, ensuring a modern and visually appealing user interface.

## How it Works

The backbone of this application lies in the `SpeechSynthesisUtterance` object from the SpeechSynthesis API. This pivotal API component encapsulates the text-to-speech functionality, offering:

- **Versatile Speech Configuration**: Users can effortlessly configure various aspects of speech synthesis via the `SpeechSynthesisUtterance` object. This includes setting the content to be spoken (`text`), adjusting the speaking rate (`rate`), specifying voice pitch (`pitch`), and selecting desired voices.
- **Real-time Interaction**: Through event listeners and dynamic updates, the application ensures real-time interaction with speech synthesis. Event handling for word boundaries allows for precise word highlighting, enhancing user engagement and comprehension.

## Usage

1. **Input Text**: Enter or paste text into the provided textarea for instant conversion into spoken words.
2. **Adjust Parameters**: Customize speech parameters such as speed and voice pitch using intuitive input controls.
3. **Control Playback**: Utilize the straightforward play, pause, and stop buttons to manage speech synthesis according to user preferences.
4. **Enhanced User Experience**: Experience seamless integration of visual and auditory feedback with synchronized text highlighting, ensuring clarity and immersion.

## Screenshots
![Mobile_Preview](https://github.com/VijayasuriyanV/Text_to_Speech_Application/blob/main/git_assets/Mobile.png)

![PC_Preview](https://github.com/VijayasuriyanV/Text_to_Speech_Application/blob/main/git_assets/lgDevice.png)

![DEMO_VIDEO](https://github.com/VijayasuriyanV/Text_to_Speech_Application/blob/main/git_assets/https://github.com/VijayasuriyanV/Text_to_Speech_Application/blob/main/git_assets/Demo.mp4)






// To be

## Installation

Clone the repository and launch `index.html` in a web browser to enjoy the application locally. An internet connection is required for the Tailwind CSS CDN link.
