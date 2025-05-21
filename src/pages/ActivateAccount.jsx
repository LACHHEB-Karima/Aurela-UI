import { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { activateAccount } from '../services/AuthenticationService';

export default function ActivateAccount() {
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const [error, setError] = useState("");
    const inputRefs = useRef([]);
    const navigate = useNavigate();

    const handleChange = (e, index) => {
        const value = e.target.value.replace(/[^0-9]/g, "");

        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        if (value && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        const key = e.key;

        if (key === "Backspace") {
            if (code[index]) {
                // Clear current
                const newCode = [...code];
                newCode[index] = "";
                setCode(newCode);
            } else if (index > 0) {
                // Move to previous and clear
                inputRefs.current[index - 1].focus();
                const newCode = [...code];
                newCode[index - 1] = "";
                setCode(newCode);
            }
        } else if (key === "ArrowLeft" && index > 0) {
            inputRefs.current[index - 1].focus();
        } else if (key === "ArrowRight" && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };


    useEffect(() => {
        if (code.every(d => d !== "")) {
            const verifyCode = async () => {
                try {
                    const codeString = code.join("");
                    await activateAccount(codeString);
                    navigate("/login");
                } catch (err) {
                    setError(err.response?.data?.message || "Activation failed. Please try again.");
                    setCode(["", "", "", "", "", ""]);
                    inputRefs.current[0].focus();
                }
            };
            verifyCode();
        }
    }, [code]);

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-md m-auto mt-10">
            <h1 className="text-3xl font-normal text-center text-gray-800 mb-4">Activate Your Account</h1>
            <div className="w-16 h-px bg-gray-600 mb-12"></div>
            <p className="text-gray-600 mb-6 mx-auto text-center">Enter the 6-digit code sent to your email <br />If not found check your spam</p>
            <div className="w-full">
               {error && <div className="mb-4 text-red-500 text-center text-sm">{error}</div>}

                <div className="flex justify-center gap-3 mb-6">
                    {code.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            value={digit}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            ref={(el) => (inputRefs.current[index] = el)}
                            className="w-12 h-12 text-center text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
