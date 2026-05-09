export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  innovation: string;
  challenge: string;
  deepDive?: {
    title: string;
    content: string;
  };
}

export const projects: Project[] = [
  {
    id: "academia-vault",
    title: "Academia Vault",
    description: "Academia Vault is a decentralized document security system built to protect academic content with AES-256-GCM encryption and LSB steganography. It transforms documents into pixel-embedded payloads and shards them across a peer-to-peer network to keep data secure and private.",
    tech: ["AES-256-GCM", "LSB Steganography", "P2P", "Flutter", "Dart"],
    innovation: "Secure academic documents that transform into encrypted shards for peer-to-peer distribution",
    challenge: "Turning confidential files into pixel-woven shards while preserving integrity and privacy",
    deepDive: {
      title: "Security Deep Dive: AES and Steganography",
      content: `Academia Vault compresses and encrypts academic documents before hiding them inside standard images using least significant bit steganography. The carrier image is then split into independent shards, each shared across the peer network with verification. Biometric access and zero-knowledge extraction keep the system focused on secure recovery and user privacy.`
    }
  },
  {
    id: "fiscal-a-pro",
    title: "Android Financial Intelligence App",
    description: "Transforms raw transaction data into actionable financial summaries using custom logic-based rules for cash flow and expense tracking.",
    tech: ["Flutter", "Dart", "SQL Server/SQLite", "Finance", "Mobile"],
    innovation: "Real-time financial insight with a secure backend and dependable mobile experience",
    challenge: "Turning transaction records into clear, actionable financial summaries",
    deepDive: {
      title: "Finance Deep Dive: Transaction Intelligence",
      content: `Implements custom logic-based categorization to transform raw SMS/transaction data into actionable financial insights, providing real-time cash flow monitoring and budget forecasting.`
    }
  }
];
