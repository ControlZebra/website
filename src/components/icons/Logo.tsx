interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "h-8 w-8", showText = true }: LogoProps) {
  return (
    <div className="flex items-center gap-3">
      <svg 
        className={className} 
        viewBox="0 0 48 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Zebra head silhouette with git branch integration */}
        <circle cx="24" cy="24" r="22" className="fill-primary-500/20" />
        <circle cx="24" cy="24" r="18" className="fill-gray-900" />
        
        {/* Git branch nodes forming zebra pattern */}
        <circle cx="24" cy="14" r="3" className="fill-primary-500" />
        <circle cx="18" cy="24" r="3" className="fill-primary-400" />
        <circle cx="30" cy="24" r="3" className="fill-primary-400" />
        <circle cx="24" cy="34" r="3" className="fill-primary-500" />
        
        {/* Connecting lines (git branches) */}
        <path 
          d="M24 17 L24 31 M21 24 L27 24 M21 21 L27 27 M27 21 L21 27" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round"
          className="text-primary-500/60"
        />
        
        {/* Zebra stripes accent */}
        <path 
          d="M15 20 L18 17 M33 20 L30 17 M15 28 L18 31 M33 28 L30 31" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round"
          className="text-gray-600"
        />
      </svg>
      
      {showText && (
        <span className="text-xl font-bold tracking-tight">
          <span className="text-white">Control</span>
          <span className="text-primary-500">Zebra</span>
        </span>
      )}
    </div>
  );
}
