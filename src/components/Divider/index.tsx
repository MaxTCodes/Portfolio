import React from "react";

// migrated to a function as recommended by https://beta.reactjs.org/reference/react/Component
export function Divider() {
    return (
        <div className="mt-6 relative pb-6">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300" />
            </div>
        </div>
    )
}