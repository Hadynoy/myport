// src/components/CVDocument.jsx
import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

// Styles
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
          <Text>onubaiyeadinoyi@gmail.com</Text>
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
          Passionate Frontend Developer with a background in Accounting and a drive for clean, user-focused design. I build modern, responsive web interfaces using React and Tailwind CSS. Recently built and deployed “Healthbridge” — a real-world healthcare platform — and currently working on a real estate web application. Eager to contribute to professional teams and grow in a real-world development environment.
        </Text>
      </View>

      {/* Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projects</Text>

        <Text style={styles.jobTitle}>Healthbridge — Healthcare Website</Text>
        <Text style={styles.jobPeriod}>2025</Text>
        {[
          "Designed and developed the frontend using React and Tailwind CSS.",
          "Implemented responsive UI and user flows for booking, profiles, and messaging.",
          "Focused on real deployment performance (Lighthouse, lazy loading, image optimization)."
        ].map((item, i) => (
          <Text key={i} style={styles.listItem}>• {item}</Text>
        ))}

        <Text style={[styles.jobTitle, { marginTop: 8 }]}>Estate Website — Real Estate Platform</Text>
        <Text style={styles.jobPeriod}>2025 (In Progress)</Text>
        {[
          "Building an elegant frontend with animated sections and professional UI components.",
          "Uses real-world UI practices from Envato templates with smooth navigation and interaction.",
        ].map((item, i) => (
          <Text key={i} style={styles.listItem}>• {item}</Text>
        ))}
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.paragraph}>B.Sc. Accounting — [Open University of Nigeria] (2024)</Text>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skillsGrid}>
          {[
            "React.js",
            "Tailwind CSS",
            "JavaScript (ES6+)",
            "Framer Motion",
            "Responsive Design",
            "Version Control (Git)",
            "Form Validation",
            "Frontend Performance",
          ].map((skill, i) => (
            <Text key={i} style={styles.skillItem}>{skill}</Text>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default CVDocument;
