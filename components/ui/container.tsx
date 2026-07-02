import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType;
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[90rem]',
};

export function Container({ as: Component = "div", className, children, size = 'lg', ...props }: ContainerProps) {
    return (
        <Component className={cn("mx-auto px-6 lg:px-8", sizeClasses[size], className)} {...props}>
            {children}
        </Component>
    );
}
