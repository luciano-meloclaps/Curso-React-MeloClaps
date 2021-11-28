import { useState } from "react/cjs/react.development"

const App = () => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useState(() => {
        axios(

        ).then((res) => setData(res.data));
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
    }, []);
}