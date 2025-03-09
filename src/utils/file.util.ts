

/**
 * Get file size in bytes as a params and return a formatted size like "1 KB", "10 MB" ...etc
 */
export function formatFileSize(fileSizeInBytes: number): string {
  const KB = 1024;
  const MB = KB * 1024;
  const GB = MB * 1024;

  switch (true) {
    case fileSizeInBytes < KB:
      return fileSizeInBytes + " B";

    case fileSizeInBytes < MB:
      return (fileSizeInBytes / KB).toFixed(2) + " KB";

    case fileSizeInBytes < GB:
      return (fileSizeInBytes / MB).toFixed(2) + " MB";

    default:
      return (fileSizeInBytes / GB).toFixed(2) + " GB";
  }
}

// Create a function that takes a list of files and return them in 3 arrays which are videos, images and files

/**
 * Categorizes an array of files into different types: videos, images, and other files.
 * @param {File[]} files - An array of File objects to be categorized.
 * @returns {{
 *   videos: File[];
 *   images: File[];
 *   otherFiles: File[];
 * }} An object containing arrays of categorized files.
 */ export function categorizeFilesByType(files: File[]): {
  videos: File[];
  images: File[];
  otherFiles: File[];
} {
  const videos: File[] = [];
  const otherFiles: File[] = [];
  const images: File[] = [];

  for (const file of files) {
    if (file.type.startsWith("video")) {
      videos.push(file);
      continue;
    }

    if (file.type.startsWith("image")) {
      images.push(file);
      continue;
    }

    otherFiles.push(file);
  }

  return { images, videos, otherFiles };
}

/**
 * Categorizes an array of auction media into different types: videos, images, and other files.
 * @param {File[]} files - An array of File objects to be categorized.
 * @returns {{
 *   videos: File[];
 *   images: File[];
 *   otherFiles: File[];
 * }} An object containing arrays of categorized files.
 */ export function categorizeIncomingMediaByType(files: File[]): {
  videos: File[];
  images: File[];
  otherFiles: File[];
} {
  const videos: File[] = [];
  const otherFiles: File[] = [];
  const images: File[] = [];

  for (const file of files) {
    if (file.type.startsWith("video")) {
      videos.push(file);
      continue;
    }

    if (file.type.startsWith("photo")) {
      images.push(file);
      continue;
    }

    otherFiles.push(file);
  }

  return { images, videos, otherFiles };
}
