export interface action {
    id: string;
    label: string;
    page: string;
    method: () => void;
}