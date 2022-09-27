let admin = require("firebase-admin");

let serviceAccount = {
  type: process.env.ADMIN_TYPE || "",
  project_id: process.env.ADMIN_PROJECT_ID || "test-project",
  private_key_id: process.env.ADMIN_PRIVATE_KEY_ID || "",
  private_key: process.env.ADMIN_PRIVATE_KEY || "REDACTED",
  client_email: process.env.ADMIN_CLIENT_EMAIL || "REDACTED",
  client_id: process.env.ADMIN_CLIENT_ID || "",
  auth_uri: process.env.ADMIN_AUTH_URI || "",
  token_uri: process.env.ADMIN_TOKEN_URI || "",
  auth_provider_x509_cert_url:
    process.env.ADMIN_AUTH_PROVIDER_X509_CERT_URL || "",
  client_x509_cert_url: process.env.ADMIN_CLIENT_X509_CERT_URL || "",
};

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const firestore = admin.firestore();
export const auth = admin.auth();
