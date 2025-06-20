import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    padding: 40,
    fontSize: 10.25,
    fontFamily: "Helvetica",
    color: "#1f1f1f",
    lineHeight: 1.55,
  },
  header: {
    backgroundColor: "#000",
    paddingVertical: 18,
    paddingHorizontal: 16,
    textAlign: "center",
    color: "#fff",
    marginBottom: 28,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 10,
  },
  contact: {
    fontSize: 9,
    color: "#ccc",
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 600,
    textTransform: "uppercase",
    marginBottom: 6,
    borderBottom: "1 solid #e0e0e0",
    paddingBottom: 4,
    color: "#111",
    letterSpacing: 0.4,
  },
  paragraph: {
    fontSize: 10,
    color: "#333",
    marginBottom: 6,
  },
  jobTitle: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 3,
  },
  jobPeriod: {
    fontSize: 9,
    color: "#666",
    marginBottom: 5,
  },
  listItem: {
    fontSize: 9.5,
    marginLeft: 10,
    marginBottom: 2.5,
    color: "#333",
  },
  skillsGrid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  skillItem: {
    width: "48%",
    fontSize: 9.5,
    color: "#222",
    paddingVertical: 1.5,
    borderBottom: "0.5 solid #ccc",
  },
});

const CVDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>Onubaiye Adinoyi</Text>
        <View style={styles.contact}>
          <Text>bigmoerell@gmail.com</Text>
          <Text> | </Text>
          <Text>Lagos, Nigeria</Text>
          <Text> | </Text>
          <Text>+234 809 8986 274</Text>
        </View>
      </View>

      {/* Profile */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profile</Text>
        <Text style={styles.paragraph}>
          Junior frontend developer with a background in accounting and a strong passion for clean, interactive design. Experienced in building responsive, production-ready websites using React, Tailwind CSS, and JavaScript. Focused on creating elegant user interfaces and continuously improving real-world performance.
        </Text>
      </View>

      {/* Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projects</Text>

        <Text style={styles.jobTitle}>Healthbridge — Healthcare Platform</Text>
        <Text style={styles.jobPeriod}>2025</Text>
        {[
          "Developed the frontend using React and Tailwind CSS with clean, scalable architecture.",
          "Created responsive interfaces for patient booking, profiles, and secure messaging.",
          "Optimized for real-world deployment: Lighthouse scoring, lazy loading, and asset compression.",
        ].map((item, i) => (
          <Text key={i} style={styles.listItem}>• {item}</Text>
        ))}

        <Text style={[styles.jobTitle, { marginTop: 8 }]}>Estate Website — Real Estate Platform</Text>
        <Text style={styles.jobPeriod}>2025 (In Progress)</Text>
        {[
          "Building a refined frontend using React and Tailwind, inspired by top Envato templates.",
          "Includes animated components, scroll-based UI, and mobile-first responsive layouts.",
        ].map((item, i) => (
          <Text key={i} style={styles.listItem}>• {item}</Text>
        ))}

        <Text style={[styles.jobTitle, { marginTop: 8 }]}>Portfolio Website — Developer Portfolio</Text>
        <Text style={styles.jobPeriod}>2025</Text>
        {[
          "Designed and developed a personal portfolio using React, Tailwind CSS, and Framer Motion.",
          "Implemented interactive sections like Hero, About, Services, Testimonials, Contact, and a dynamic CV page with PDF export.",
          "Focused on polished UI, scroll animations, responsiveness, and Lighthouse optimization for real deployment.",
          "Hosted live with domain and CI/CD setup using Render.",
        ].map((item, i) => (
          <Text key={i} style={styles.listItem}>• {item}</Text>
        ))}
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.paragraph}>B.Sc. Accounting — University of Abuja, Nigeria</Text>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skillsGrid}>
          {[
            "React.js",
            "Tailwind CSS",
            "JavaScript (ES6+)",
            "Responsive Design",
            "Version Control (Git)",
            "Framer Motion",
            "UI Animation",
            "Accessibility & SEO",
          ].map((skill, i) => (
            <Text key={i} style={styles.skillItem}>{skill}</Text>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default CVDocument;
