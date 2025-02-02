import { applicationDefault, initializeApp } from 'firebase-admin/app';

initializeApp({
  credential: applicationDefault(),
  storageBucket: 'gs://nest-firebase-gcp.firebasestorage.app',
});
