import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet
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
    marginBottom: 10, // Increased space after name
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
        <Text style={styles.name}>Big Moerell</Text>
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
          Quality-focused IT specialist with 6+ years of experience delivering technical support, infrastructure maintenance, and system optimization. Dedicated to executive-level service with CRISC certification and a commitment to proactive problem-solving.
        </Text>
      </View>

      {/* Employment History */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Employment History</Text>

        <Text style={styles.jobTitle}>IT Specialist — Callubra, Seattle</Text>
        <Text style={styles.jobPeriod}>July 2016 — Jan 2022</Text>
        {[
          "Provided on-site technical support for IT and AV infrastructure at various client locations.",
          "Handled end-to-end support including implementation of audio/visual systems.",
          "Created, updated and adhered to procedural documentation.",
          "Supported servers and back-end network systems.",
          "Collaborated on multi-million dollar projects."
        ].map((item, i) => (
          <Text key={i} style={styles.listItem}>• {item}</Text>
        ))}

        <Text style={[styles.jobTitle, { marginTop: 8 }]}>IT Support Specialist — Seattle Central College</Text>
        <Text style={styles.jobPeriod}>Oct 2013 — Jun 2016</Text>
        {[
          "Recommended hardware/software purchases after research and analysis.",
          "Provided IT support to staff, students, and faculty.",
          "Maintained campus-wide inventory systems.",
          "Supported over 10 internal systems with minimal downtime."
        ].map((item, i) => (
          <Text key={i} style={styles.listItem}>• {item}</Text>
        ))}
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.paragraph}>B.Sc. Computer Science — Seattle University (2009 – 2013)</Text>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skillsGrid}>
          {[
            "Computer Networking",
            "JavaScript & Angular",
            "Software Installation",
            "Customer Support",
            "Problem Solving",
            "Team Collaboration",
          ].map((skill, i) => (
            <Text key={i} style={styles.skillItem}>{skill}</Text>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default CVDocument;
