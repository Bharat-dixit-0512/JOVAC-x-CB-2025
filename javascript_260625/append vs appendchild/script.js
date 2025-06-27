const appendBox = document.getElementById("appendBox");
const appendChildBox = document.getElementById("appendChildBox");

// append() - can add text or elements
const text1 = " - text using append";
const span1 = document.createElement("span");
span1.textContent = " | span using append";
appendBox.append(text1, span1);  // Multiple nodes/strings allowed

// appendChild() - can only add one Node (no plain string allowed)
const span2 = document.createElement("span");
span2.textContent = " | span using appendChild";
appendChildBox.appendChild(span2); // Only one Node at a time
