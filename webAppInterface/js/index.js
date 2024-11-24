/*
 * GNU GENERAL PUBLIC LICENSE
 * Version 3, 29 June 2007
 *
 * Copyright (C) 2024 BlipSoft (@ilbpedro)
 * https://www.gnu.org/licenses/
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see https://www.gnu.org/licenses/.
 */

// ############################################################################

const theme = document.getElementById('theme-select').value;

// ################################ SECTION 01 ################################
document.addEventListener("DOMContentLoaded", function() {
    // Adds a click event to the header
    document.getElementById("section1-header").addEventListener("click", function() {
        toggleSection('section1');
    });

    // Adds a copy event when clicking on the result
    document.getElementById("section1-textspan").addEventListener("click", function() {
        copyToClipboard(this);
    });

});
// ################################ SECTION 02 ################################

document.addEventListener("DOMContentLoaded", function() {
    // Adds a click event to the header
    document.getElementById("section2-header").addEventListener("click", function() {
        toggleSection('section2');
    });

    // Adds a copy event when clicking on the result
    document.getElementById("section2-textspan").addEventListener("click", function() {
        copyToClipboard(this);
    });

});
// ################################ SECTION 03 ################################
// Função para configurar manipuladores de eventos e definir o valor padrão da divisão
document.addEventListener("DOMContentLoaded", function() {
    // Adds a click event to the header
    document.getElementById("section3-header").addEventListener("click", function() {
        toggleSection('section3');
    });

    // Adds a copy event when clicking on the result
    document.getElementById("section3-textspan").addEventListener("click", function() {
        copyToClipboard(this);
    });

    // Defines a default value in 'section3-label2'
    document.getElementById("section3-label2").value = -2.0; // default value (js)
});
// ################################ SECTION 04 ################################
// Função para configurar manipuladores de eventos e definir o valor padrão da divisão
document.addEventListener("DOMContentLoaded", function() {
    // Adds a click event to the header
    document.getElementById("section4-header").addEventListener("click", function() {
        toggleSection('section4');
    });

    // Adds a copy event when clicking on the result
    document.getElementById("section1-textspan").addEventListener("click", function() {
        copyToClipboard(this);
    });
});
// ########################### PREFERENCES EVENTS #############################
document.addEventListener('DOMContentLoaded', function () {
    // Selecting the elements
    const themeSelect = document.getElementById('theme-select');

    const closeModalButton = document.getElementById('closeModal');
    const savePreferencesButton = document.getElementById('savePreferences');
    
    // For the button to save preferences
    savePreferencesButton.addEventListener('click', function () {
        savePreferences();
    });

    // For when the user selects a value in the theme <select>
    themeSelect.addEventListener('change', function () {
        const selectedTheme = themeSelect.value;  // Corrigido para capturar o valor selecionado
        applyTheme(selectedTheme);
    });

    // Close/hide the modal
    closeModalButton.addEventListener('click', function () {
        document.getElementById("preferencesModal").style.display = "none";
    });
});
// ############################ HELP/ABOUT EVENTS #############################
document.addEventListener('DOMContentLoaded', function () {
    // Selecting the modal elements and links
    const closeHelpModalButton = document.getElementById('closeHelpModal');
    const closeDonationModalButton = document.getElementById('closeDonationModal');
    const closePrivacyModalButton = document.getElementById('closePrivacyModal');
    const closeTosModalButton = document.getElementById('closeTosModal');
    
    const openPrivacyModalButton = document.getElementById('openPrivacyModal');
    const openTosModalButton = document.getElementById('openTosModal');

    const donationModal = document.getElementById('donationModal');
    const privacyModal = document.getElementById('privacyModal');
    const tosModal = document.getElementById('tosModal');
    const helpModal = document.getElementById('helpModal');

    // Close/hide Help Modal
    closeHelpModalButton.addEventListener('click', function () {
        helpModal.style.display = 'none';
    });

    // Close/hide Donation Modal
    closeDonationModalButton.addEventListener('click', function () {
        donationModal.style.display = 'none'; // Fechar o modal de doação
    });

    // Close/hide Privacy Policy Modal
    closePrivacyModalButton.addEventListener('click', function () {
        privacyModal.style.display = 'none';
    });

    // Close/hide Terms of Service Modal
    closeTosModalButton.addEventListener('click', function () {
        tosModal.style.display = 'none';
    });

    // Open Donation Modal
    donatePixButton.addEventListener('click', function () {
        donationModal.style.display = 'block';
    });

    // Open Privacy Policy Modal
    openPrivacyModalButton.addEventListener('click', function () {
        privacyModal.style.display = 'block';
    });

    // Open Terms of Service Modal
    openTosModalButton.addEventListener('click', function () {
        tosModal.style.display = 'block';
    });
});
// ############################################################################
// Call toggleSection to collapse or expand a section
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.style.display = section.style.display === 'none' ? 'block' : 'none';
}

// Call toggleSection initially to collapse all sections
document.querySelectorAll('.section-content').forEach(section => {
    section.style.display = 'none';
});

// ----------------------------------------------------------------------------
// Function to save preferences
function savePreferences() {
    const themeSelect = document.getElementById('theme-select');
    const selectedTheme = themeSelect.value;  // capture the currently selected theme value

    // Save preferences to local storage or apply as needed
    localStorage.setItem('theme', selectedTheme);
    
    applyTheme(selectedTheme);

    // Close the modal or provide feedback
    document.getElementById("preferencesModal").style.display = "none";
}
// ----------------------------------------------------------------------------

function applyTheme(theme) {
    document.body.className = '';
    document.body.classList.add(theme);

    const themes = {
        light: {
            bg: '#ffffff', text: '#353535', border: '#888888', button: '#004bbb', buttonText: '#ffffff', buttonHover: '#1866ba',
            helpButtonTextContent: '?', helpButtonTextColor: '#eeeeee',
            modalBg: 'rgba(0, 0, 0, 0.5)', modalContentBg: '#fefefe', modalText: '#000000', link: '#008cff', linkHover: '#0067b3',
            sectionBg: '#eeeeee', sectionBorder: '#5f5f5f', closeBtn: '#212121', closeBtnHover: '#424242', sectionHover: '#cccccc',
            textColorControls: '#1866ba', pSpan: '#0059cc'
        },
        dark: {
            bg: '#333333', text: '#40bfbf', border: '#8f7797', button: '#3292a3', buttonText: '#2a2d40', buttonHover: '#3cafc4',
            helpButtonTextContent: '?', helpButtonTextColor: '#ccefff',
            modalBg: 'rgba(0, 0, 0, 0.8)', modalContentBg: '#333333', modalText: '#3ba2b5', link: '#bbdfff', linkHover: '#77aaff',
            sectionBg: '#444444', sectionBorder: '#7e6f35', closeBtn: '#797979', closeBtnHover: '#aaaaaa', sectionHover: '#3c4b4f',
            textColorControls: '#0d95b7', pSpan: '#40bfbf'
        },
        cblind0: {
            bg: '#ffffff', text: '#000000', border: '#000000', button: '#000000', buttonText: '#ffffff', buttonHover: '#333333',
            helpButtonTextContent: '?', helpButtonTextColor: '#ffffff',
            modalBg: 'rgba(255, 255, 255, 0.9)', modalContentBg: '#ffffff', modalText: '#000000', link: '#000000', linkHover: '#666666',
            sectionBg: '#f0f0f0', sectionBorder: '#000000', closeBtn: '#000000', closeBtnHover: '#aaaaaa', sectionHover: '#dedede',
            textColorControls: '#000000', pSpan: '#505050'
        },
        cblind1: { // Protanopia - Evitando vermelho
            bg: '#f7e0d0', text: '#4d3a3a', border: '#704040', button: '#704040', buttonText: '#f7e0d0', buttonHover: '#4d3a3a',
            helpButtonTextContent: '?', helpButtonTextColor: '#f7e0d0',
            modalBg: 'rgba(255, 240, 230, 0.9)', modalContentBg: '#f7e0d0', modalText: '#4d3a3a', link: '#735c5c', linkHover: '#563838',
            sectionBg: '#f2d7c7', sectionBorder: '#704040', closeBtn: '#704040', closeBtnHover: '#4d3a3a', sectionHover: '#d0b5a5',
            textColorControls: '#5d4a48', pSpan: '#804040'
        },
        cblind2: { // Deuteranopia - Evitando verde
            bg: '#f5e6ff', text: '#5a3a78', border: '#4d3066', button: '#5a3a78', buttonText: '#f5e6ff', buttonHover: '#4d3066',
            helpButtonTextContent: '?', helpButtonTextColor: '#f5e6ff',
            modalBg: 'rgba(245, 230, 255, 0.9)', modalContentBg: '#f5e6ff', modalText: '#5a3a78', link: '#856a94', linkHover: '#644f73',
            sectionBg: '#e8d8f8', sectionBorder: '#4d3066', closeBtn: '#4d3066', closeBtnHover: '#c474a0', sectionHover: '#c6b8d6',
            textColorControls: '#4d3066', pSpan: '#8040bf'

        },
        cblind3: { // Tritanopia - Evitando azul
            bg: '#e7f2f0', text: '#4a5854', border: '#2e4c46', button: '#4a5854', buttonText: '#e7f2f0', buttonHover: '#2e4c46',
            helpButtonTextContent: '?', helpButtonTextColor: '#e7f2f0',
            modalBg: 'rgba(231, 242, 240, 0.9)', modalContentBg: '#e7f2f0', modalText: '#4a5854', link: '#57756e', linkHover: '#3a4b46',
            sectionBg: '#d9ebe7', sectionBorder: '#2e4c46', closeBtn: '#4a5854', closeBtnHover: '#212223', sectionHover: '#b7c9c5',
            textColorControls: '#2e4c46', pSpan: '#108b70'
        }
    };

    const selectedTheme = themes[theme] || themes.light;

    // Apply styles
    document.body.style.backgroundColor = selectedTheme.bg;
    document.body.style.color = selectedTheme.text;

    // Header
    const header = document.querySelector('.header');
    header.style.backgroundColor = selectedTheme.bg;
    header.style.color = selectedTheme.text;
    //header.style.borderBottom = 1px solid ${selectedTheme.border}; // linha abaixo do <h1>

    // Preferences, Help, and Close buttons
    document.querySelectorAll('button').forEach(btn => {
        btn.style.backgroundColor = selectedTheme.button;
        btn.style.color = selectedTheme.buttonText;
        /*button.style.border = 1px solid ${selectedTheme.border};*/
        btn.addEventListener('mouseenter', () => btn.style.backgroundColor = selectedTheme.buttonHover);
        btn.addEventListener('mouseleave', () => btn.style.backgroundColor = selectedTheme.button);
    });
    document.querySelectorAll('.close').forEach(closeButton => {
        closeButton.style.backgroundColor = selectedTheme.closeButton;
        closeButton.style.color = selectedTheme.closeBtn; // close button is a character (times)
        /*closeButton.style.border = 1px solid ${selectedTheme.border};*/
        closeButton.addEventListener('mouseenter', () => closeButton.style.color = selectedTheme.closeBtnHover);
        closeButton.addEventListener('mouseleave', () => closeButton.style.color = selectedTheme.closeBtn);
    });
        
    // Sections and Subtitles
    document.querySelectorAll('section, .result').forEach(section => {
        section.style.backgroundColor = selectedTheme.sectionBg;
        /*section.style.border = 3px solid ${selectedTheme.sectionBorder};*/
        section.style.borderRadius = '10px';
        section.addEventListener('mouseenter', () => section.style.backgroundColor = selectedTheme.sectionHover);
        section.addEventListener('mouseleave', () => section.style.backgroundColor = selectedTheme.sectionBg);
    });
    document.querySelectorAll('h2').forEach(h2 => {
        h2.style.color = selectedTheme.text;
    });

    // p (Paragraph)
    document.querySelectorAll('span').forEach(pspan => {
        pspan.style.color = selectedTheme.pSpan;
    });

    // Inputs and Selects
    document.querySelectorAll('input, select').forEach(el => {
        el.style.color = selectedTheme.textColorControls;
        el.style.backgroundColor = selectedTheme.bg;
        //el.style.border = selectedTheme.border;
    });

    // Links
    document.querySelectorAll('a').forEach(link => {
        link.style.color = selectedTheme.link;
        link.addEventListener('mouseenter', () => link.style.color = selectedTheme.linkHover);
        link.addEventListener('mouseleave', () => link.style.color = selectedTheme.link);
    });

    // Text inside sections
    document.querySelectorAll('.result, label').forEach(resLabel => {
        resLabel.style.color = selectedTheme.text;
    });

    // Modals
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.backgroundColor = selectedTheme.modalBg;
        /*modal.style.border = 1px solid ${selectedTheme.border};*/

        const modalContent = modal.querySelector('.modal-content');
        modalContent.style.backgroundColor = selectedTheme.modalContentBg;
        modalContent.style.color = selectedTheme.modalText;
        modalContent.querySelectorAll('a').forEach(link => {
            link.style.color = selectedTheme.link;
            link.addEventListener('mouseenter', () => link.style.color = selectedTheme.linkHover);
            link.addEventListener('mouseleave', () => link.style.color = selectedTheme.link);
        });
    });

    const modalsHelp = document.querySelectorAll('.modal-help');
    modalsHelp.forEach(modalH => {
        modalH.style.backgroundColor = selectedTheme.modalBg;
        const modalContentH = modalH.querySelector('.modal-content');
        if (modalContentH) {
            modalContentH.style.backgroundColor = selectedTheme.modalContentBg;
            modalContentH.style.color = selectedTheme.modalText;
            modalContentH.querySelectorAll('a').forEach(link => {
                link.style.color = selectedTheme.link;
                link.onmouseenter = () => link.style.color = selectedTheme.linkHover;
                link.onmouseleave = () => link.style.color = selectedTheme.link;
            });
        }
    });

    // Specific styles for the help button (text and text color)
    const helpButton = document.getElementById('helpButton');
    const helpButtonSpan = helpButton.querySelector('span'); // Seleciona o <span> dentro do botão de ajuda

    if (helpButton) {
        // define the text and text color of a button
        helpButtonSpan.textContent = selectedTheme.helpButtonTextContent;
        helpButtonSpan.style.color = selectedTheme.helpButtonTextColor;
    }

    // Icons
    const helpBtn = document.getElementById('help-btn');
    const prefButton = document.getElementById('prefbutton');
    if (helpBtn) helpBtn.style.color = selectedTheme.link;
    if (prefButton) prefButton.style.color = selectedTheme.text;

    // Paragraphs
    document.querySelectorAll('p').forEach(p => {
        p.style.color = selectedTheme.linkHover;
    });
}
// ----------------------------------------------------------------------------

// Preferences modal handling
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('preferencesModal');
    const btn = document.getElementById('preferencesButton');
    const span = document.getElementsByClassName('close')[0];

    // When the user clicks the button, the modal opens
    btn.onclick = function() {
        modal.style.display = 'block';
    }

    // Close the modal when clicking the X
    span.onclick = function () {
        modal.style.display = 'none';
    }

    // Close the modal when clicking outside the content
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Close the modal when clicking outside the modal content
    window.onclick = function(event) {
        if (event.target == modal && !modalContent.contains(event.target)) {
            modal.style.display = 'none';
        }
    };
});
// ----------------------------------------------------------------------------

// Function to open the Help/About modal
function openHelpModal() {
    document.getElementById('helpModal').style.display = 'block';   
}

// Get Help/About modal element
document.addEventListener('DOMContentLoaded', () => {
    const helpModal = document.getElementById('helpModal');
    const helpButton = document.getElementById('helpButton');
    const closeHelpModal = document.getElementById('closeHelpModal');

    // When the user clicks the help button, open the modal
    helpButton.onclick = function() {
        helpModal.style.display = 'block';
    }

    // When the user clicks on <span> (x), close the modal
    closeHelpModal.onclick = function() {
        helpModal.style.display = 'none';
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == helpModal) {
            helpModal.style.display = 'none';
        }
    }
});

// ----------------------------------------------------------------------------

function openModalPix() {
    document.getElementById("donationModal").style.display = "flex";
}

function closeModalPix() {
    document.getElementById("donationModal").style.display = "none";
}

// Close modal if clicking outside the image
window.onclick = function(event) {
    const modal = document.getElementById("donationModal");
    if (event.target === modal) {
        closeModalPix();
    }
};
// ----------------------------------------------------------------------------

// Function to open the modal and decode text in Base64
function openModalTosPriv(modalId) {
    document.getElementById(modalId).style.display = "flex"; // Exibe o modal

    if (modalId === "privacyModal") {
        const encodedText = document.getElementById("privacyText").textContent.trim();
        const decodedText = atob(encodedText);
        document.getElementById("privacyText").textContent = decodedText;

    } else if (modalId === "tosModal") {
        const encodedText = document.getElementById("tosText").textContent.trim();
        const decodedText = atob(encodedText);
        document.getElementById("tosText").textContent = decodedText;
    }
}

    // Function to close/hide the modal
function closeModalTosPriv(modalId) {
    document.getElementById(modalId).style.display = "none";
    }

    // Adds click events to open and close the modals
    document.getElementById("openPrivacyModal").onclick = () => openModalTosPriv("privacyModal");
    document.getElementById("openTosModal").onclick = () => openModalTosPriv("tosModal");
    document.getElementById("closePrivacyModal").onclick = () => closeModalTosPriv("privacyModal");
    document.getElementById("closeTosModal").onclick = () => closeModalTosPriv("tosModal");

    // Closes the modal when clicking outside the content area
    window.onclick = function(event) {
    if (event.target === document.getElementById("privacyModal")) {
        closeModalTosPriv("privacyModal");
    } else if (event.target === document.getElementById("tosModal")) {
        closeModalTosPriv("tosModal");
    }
};

// ----------------------------------------------------------------------------

function copyToClipboard(element) {
    // Get the text content from the element (span)
    const text = element.textContent;

    // Create a temporary hidden input to hold the text to copy
    const tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = text;

    // Select the text and execute the copy command
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");

    // Remove the temporary input
    document.body.removeChild(tempInput);

    // Optional: Alert the user that the text has been copied
    alert("Copied to clipboard!");
}

// Modern JS way to copy to clipboard.
// HTML Link example: <a href="#" onclick="copyToClipboard('email@email.net'); return false;">email@email.net</a>
/* async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        alert("Email copied to clipboard!"); // Optional: Notify the user
    } catch (err) {
        console.error("Failed to copy: ", err);
    }
} */
// ----------------------------------------------------------------------------

// Function to load preferences on page load
window.onload = function() {
    const savedTheme = localStorage.getItem('theme');  // Carrega o tema salvo do localStorage

    if (savedTheme) {
        document.getElementById('theme-select').value = savedTheme;  // Define o valor do select para o tema salvo
        applyTheme(savedTheme);  // Aplica o tema salvo
    }
    
    document.getElementById('savePreferences').onclick = savePreferences;
};
// ----------------------------------------------------------------------------
