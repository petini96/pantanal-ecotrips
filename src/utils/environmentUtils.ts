export const getApiUrl = () => {
    console.log(process.env.BACKEND_URL)
    return `http://localhost:8080`;
}

export const TOURS_BUCKET_NAME = process.env.TOURS_BUCKET_NAME || 'https://minio-s3.roboticsmind.com.br/tours-bucket';
export const PACKAGE_BUCKET_NAME = process.env.PACKAGE_BUCKET_NAME || 'https://minio-s3.roboticsmind.com.br/packages-bucket';
export const GENERAL_BUCKET_NAME = process.env.GENERAL_BUCKET_NAME || 'https://minio-s3.roboticsmind.com.br/general';