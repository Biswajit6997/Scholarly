// // // function switchMode(mode) {
// // //     const modes = document.querySelectorAll('.mode');
// // //     modes.forEach(button => {
// // //       button.classList.remove('active');
// // //     });
  
// // //     const activeButton = [...modes].find(button => button.textContent.toLowerCase().includes(mode));
// // //     activeButton.classList.add('active');
// // //   }
  
// // //   function summarizeText() {
// // //     const textInput = document.getElementById('text-input').value.trim();
// // //     const summaryOutput = document.getElementById('summary-text');
  
// // //     if (textInput === '') {
// // //       summaryOutput.textContent = 'Please enter some text to summarize.';
// // //       return;
// // //     }
  
// // //     // Placeholder summarization logic (replace this with API or actual summarization logic)
// // //     const summaryLength = document.getElementById('summary-length').value;
// // //     const sentences = textInput.split('.').filter(sentence => sentence.trim() !== '');
// // //     const summary = sentences.slice(0, summaryLength).join('. ') + '.';
  
// // //     summaryOutput.textContent = summary;
// // //   }
  
// // function summarizeText() {
// //   const textInput = document.getElementById('text-input').value.trim();
// //   const summaryText = document.getElementById('summary-text');

// //   if (textInput === '') {
// //     summaryText.textContent = 'Please enter some text to summarize.';
// //     return;
// //   }

// //   // Placeholder summarization logic (replace with real logic or API integration)
// //   const summaryLength = document.getElementById('summary-length').value;
// //   const sentences = textInput.split('.').filter(sentence => sentence.trim() !== '');
// //   const summary = sentences.slice(0, summaryLength).join('. ') + '.';

// //   summaryText.textContent = summary;
// // }

// // function copySummary() {
// //   const summaryText = document.getElementById('summary-text').textContent;

// //   if (summaryText) {
// //     navigator.clipboard.writeText(summaryText).then(() => {
// //       alert('Summary copied to clipboard!');
// //     });
// //   }
// // }

// // function downloadSummary() {
// //   const summaryText = document.getElementById('summary-text').textContent;

// //   if (summaryText) {
// //     const blob = new Blob([summaryText], { type: 'text/plain' });
// //     const url = URL.createObjectURL(blob);
// //     const a = document.createElement('a');
// //     a.href = url;
// //     a.download = 'summary.txt';
// //     a.click();
// //     URL.revokeObjectURL(url);
// //   }
// // }

// // function deleteSummary() {
// //   const summaryText = document.getElementById('summary-text');
// //   summaryText.textContent = '';
// // }
// function updateWordCount() {
//   const textInput = document.getElementById('text-input').value.trim();
//   const wordCount = textInput ? textInput.split(/\s+/).length : 0;
//   document.getElementById('input-word-count').textContent = `Word Count: ${wordCount}`;
// }

// function summarizeText() {
//   const textInput = document.getElementById('text-input').value.trim();
//   const summaryText = document.getElementById('summary-text');
//   const summaryWordCount = document.getElementById('summary-word-count');

//   if (textInput === '') {
//     summaryText.textContent = 'Please enter some text to summarize.';
//     summaryWordCount.textContent = 'Word Count: 0';
//     return;
//   }

//   // Placeholder summarization logic (replace with real logic or API integration)
//   const summaryLength = document.getElementById('summary-length').value;
//   const sentences = textInput.split('.').filter(sentence => sentence.trim() !== '');
//   const summary = sentences.slice(0, summaryLength).join('. ') + '.';

//   summaryText.textContent = summary;
//   summaryWordCount.textContent = `Word Count: ${summary.split(/\s+/).length}`;
// }

// function copySummary() {
//   const summaryText = document.getElementById('summary-text').textContent;

//   if (summaryText) {
//     navigator.clipboard.writeText(summaryText).then(() => {
//       alert('Summary copied to clipboard!');
//     });
//   }
// }

// function downloadSummary() {
//   const summaryText = document.getElementById('summary-text').textContent;

//   if (summaryText) {
//     const blob = new Blob([summaryText], { type: 'text/plain' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'summary.txt';
//     a.click();
//     URL.revokeObjectURL(url);
//   }
// }

// function deleteSummary() {
//   document.getElementById('summary-text').textContent = '';
//   document.getElementById('summary-word-count').textContent = 'Word Count: 0';
// }
// Function to update the word count of the input text
function updateWordCount() {
  const textInput = document.getElementById('text-input').value.trim();
  const wordCount = textInput ? textInput.match(/\b\w+\b/g).length : 0; // Match only words
  document.getElementById('input-word-count').textContent = `Word Count: ${wordCount}`;
}

// Function to summarize the input text
function summarizeText() {
  const textInput = document.getElementById('text-input').value.trim();
  const summaryContainer = document.getElementById('summary-container');
  const summaryText = document.getElementById('summary-text');
  const summaryWordCount = document.getElementById('summary-word-count');
  const deleteButton = document.getElementById('delete-summary');

  if (textInput === '') {
    alert('Please enter some text to summarize.');
    return;
  }

  // Placeholder summarization logic (replace with real summarization logic or API)
  const summaryLength = document.getElementById('summary-length').value;
  const sentences = textInput.split('.').filter(sentence => sentence.trim() !== '');
  const summary = sentences.slice(0, summaryLength).join('. ') + '.';

  // Display the summary
  summaryText.textContent = summary;
  summaryWordCount.textContent = `Word Count: ${summary.match(/\b\w+\b/g).length}`;
  summaryContainer.style.display = 'block'; // Show the summary container
}

// Function to delete the generated summary
function deleteSummary() {
  const summaryContainer = document.getElementById('summary-container');
  const summaryText = document.getElementById('summary-text');
  const summaryWordCount = document.getElementById('summary-word-count');

  summaryText.textContent = '';
  summaryWordCount.textContent = 'Word Count: 0';
  summaryContainer.style.display = 'none'; // Hide the summary container
}

// Function to copy the summary text to clipboard
function copySummary() {
  const summaryText = document.getElementById('summary-text').textContent;

  if (summaryText.trim() === '') {
    alert('No summary to copy!');
    return;
  }

  navigator.clipboard.writeText(summaryText).then(() => {
    alert('Summary copied to clipboard!');
  });
}

// Function to download the summary as a text file
function downloadSummary() {
  const summaryText = document.getElementById('summary-text').textContent;

  if (summaryText.trim() === '') {
    alert('No summary to download!');
    return;
  }

  const blob = new Blob([summaryText], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'summary.txt';
  link.click();
}
