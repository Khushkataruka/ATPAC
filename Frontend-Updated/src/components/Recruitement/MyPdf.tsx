"use client";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

// ✅ Styles (similar to CSS)
const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 10,
    fontFamily: "Helvetica",
  },
  header: {
    textAlign: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 12,
    marginTop: 4,
  },
  table: {
    width: "auto",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    flex: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#000",
    padding: 4,
  },
  cellHeader: {
    backgroundColor: "#d9ead3",
    fontWeight: "bold",
  },
});

interface Props {
  companyName: string;
  jobLocation: string;
  description: string;
}

export default function RegistrationFormPdf({
  companyName,
  jobLocation,
  description,
}: Props) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Career Development Cell</Text>
          <Text style={styles.subtitle}>
            Campus Registration Form 2025-26
          </Text>
        </View>

        {/* Table */}
        <View style={styles.table}>
          {/* Row 1 */}
          <View style={styles.row}>
            <Text style={[styles.cell, styles.cellHeader]}>Company Name</Text>
            <Text style={styles.cell}>{companyName}</Text>
          </View>

          {/* Row 2 */}
          <View style={styles.row}>
            <Text style={[styles.cell, styles.cellHeader]}>
              Job Location/Posting
            </Text>
            <Text style={styles.cell}>{jobLocation}</Text>
          </View>

          {/* Row 3 */}
          <View style={styles.row}>
            <Text style={[styles.cell, styles.cellHeader]}>
              Brief Job Description
            </Text>
            <Text style={styles.cell}>{description}</Text>
          </View>
        </View>

        <Text style={{ marginTop: 20 }}>
          *Industry Sector, Hiring Type, CTC, Bond, Stipend, etc. can be added
          in the same way with new rows.
        </Text>
      </Page>
    </Document>
  );
}
