export interface BaseOption {
  onSuccess?: (data?: any) => void;
  onError?: (error?: any) => void;
}
export interface EmailProps extends BaseOption {
  name: string;
  gmail: string;
  content: string;
}
