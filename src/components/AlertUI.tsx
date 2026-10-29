import Alert from '@mui/material/Alert';

interface Alertconfig {
    description: string;
}

export default function AlertUI(config: AlertConfig) {
    return (
        <Alert variant="outlined" severity="success">{config.description}</Alert>
    );
}