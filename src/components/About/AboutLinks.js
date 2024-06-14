import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { GrPersonalComputer } from "react-icons/gr";

const AboutLinks = () => {
    return (
        <div style={styles.container}>
            <a href="mailto:sp994@cornell.com" style={styles.link}>
                <FaEnvelope size={24} style={styles.icon} /> 
                <span style={styles.text}>sam13park@gmail.com</span>
            </a>
           
            <a href="https://samparkk13.github.io/" target="_blank" rel="noopener noreferrer" style={styles.link}>
                <GrPersonalComputer size={24} style={styles.icon} /> 
                <span style={styles.text}>Portfolio</span>
            </a>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column', // Align items vertically
    },
    link: {
        margin: '10px 0', // Add vertical margin between links
        textDecoration: 'none',
        color: '#333',
        display: 'flex',
        flexDirection: 'row', // Align items vertically
        alignItems: 'center',
    },
    icon: {
        cursor: 'pointer',
    },
    text: {
        marginLeft: '8px', // Add space between email and icon
    }
};

export default AboutLinks;
