import{useState} from 'react';

export default function useVisibility(component, visibility = false){
    const [visible, setVisible] = useState(() => visibility);
    return[visible ? component: null, () => setVisible((v) => !v)]
}