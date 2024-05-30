const textInput = document.getElementById("text");
const speedInput = document.getElementById("speed");
const VoicePitchInput = document.getElementById("VoicePitch");
const speakButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");
const stopButton = document.getElementById("stop-button");
const outputDiv = document.getElementById("output");

let isPaused = false;
let utterance = new SpeechSynthesisUtterance();
let currentWordIndex = 0;
let isSpeaking = false; // Track if speech synthesis is ongoing

// Event listener for Speak button
speakButton.addEventListener("click", () => {
  const text = textInput.value.trim();
  if (text !== "") {
    if (!isSpeaking) {
      // Only reset index and clear output if not already speaking
      currentWordIndex = 0; // Reset word index
      outputDiv.innerHTML = ""; // Clear previous content
    }
    playText(text);
  }
});

// Event listeners for Pause, Stop, Speed, and VoicePitch inputs
pauseButton.addEventListener("click", pauseText);
stopButton.addEventListener("click", stopText);
speedInput.addEventListener("input", updateSpeechParameters);
VoicePitchInput.addEventListener("input", updateSpeechParameters);

// Initialize speech synthesis parameters
updateSpeechParameters();

// Function to start or resume speech synthesis
function playText(text) {
  if (speechSynthesis.paused && isPaused) {
    speechSynthesis.resume(); // Resume if paused
    isPaused = false;
    utterance.addEventListener("boundary", handleWordBoundary); // Add event listener back
    return;
  }
  if (speechSynthesis.speaking) return; // Do nothing if already speaking

  // Configure the utterance object
  utterance.text = text;
  utterance.rate = speedInput.value || 1;
  utterance.pitch = VoicePitchInput.value || 1;
  textInput.disabled = true; // Disable text input while speaking

  // Add an event listener for the end of the speech
  utterance.onend = function (event) {
    isSpeaking = false; // Update speaking state
    textInput.disabled = false; // Enable text input
  };

  speechSynthesis.speak(utterance);
  isSpeaking = true;
}

// Event listener for word boundaries and highlighting
utterance.addEventListener("boundary", handleWordBoundary);

function handleWordBoundary(event) {
  if (isPaused) return; // Add this line

  const words = textInput.value.trim().split(" ");

  // Clear output if not resuming from pause
  if (!isPaused) {
    outputDiv.innerHTML = ""; // Clear previous content
  }

  // Highlight words up to the current index
  for (let i = 0; i < words.length; i++) {
    const spanElement = document.createElement("span");
    if (i < currentWordIndex) {
      spanElement.textContent = words[i];
    } else if (i === currentWordIndex) {
      spanElement.textContent = words[i];
      spanElement.classList.add("highlight");
    } else {
      spanElement.textContent = words[i];
    }
    outputDiv.appendChild(spanElement);
    outputDiv.appendChild(document.createTextNode(" "));
  }

  currentWordIndex++; // Move to the next word index
}

// Function to pause speech synthesis

function pauseText() {
  if (speechSynthesis.speaking && !speechSynthesis.paused) {
    speechSynthesis.pause(); // Pause if speech is currently speaking
    isPaused = true; // Set pause state to true
    setTimeout(() => {
      utterance.removeEventListener("boundary", handleWordBoundary); // Remove event listener
    }, 200);
    currentWordIndex--; // Decrement the current word index
  }
}

// Function to stop speech synthesis
function stopText() {
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel(); // Cancel speech synthesis
  }
  currentWordIndex = 0; // Reset word index
  textInput.disabled = false; // Enable text input
  isSpeaking = false; // Update speaking state
}

// Function to update speech parameters (rate and VoicePitch)
function updateSpeechParameters() {
  utterance.rate = speedInput.value || 1; // Set rate from the speed input
  utterance.pitch = VoicePitchInput.value || 1; // Set VoicePitch from the VoicePitch input
}
