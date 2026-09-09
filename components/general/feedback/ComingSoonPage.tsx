type ComingSoonPageProps = {
  pageName: string;
};

const PARTICLE_POSITIONS = [
  [12, 8],
  [55, 15],
  [80, 10],
  [92, 30],
  [8, 45],
  [70, 5],
  [30, 20],
  [85, 55],
  [5, 70],
  [60, 80],
  [40, 90],
  [95, 75],
  [20, 85],
  [75, 92],
  [48, 12],
  [18, 55],
  [65, 40],
  [88, 18],
  [35, 72],
  [33, 50],
];

// Circuit node colors — BYU blue/navy palette with electric accents
const NODE_COLORS = ['#002E5D', '#0062B8', '#4A90D9', '#00A3E0', '#FFB300'];

export default function ComingSoonPage({ pageName }: ComingSoonPageProps) {
  return (
    <div className="relative flex min-h-[calc(100vh-125px)] flex-col items-center justify-center overflow-hidden bg-linear-to-br from-slate-100 via-blue-50 to-slate-200 px-4 py-10">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse-node {
          0%, 100% { opacity: 0.15; transform: scale(0.6); }
          50% { opacity: 1; transform: scale(1); }
        }
        @keyframes zap {
          0%, 85%, 100% { opacity: 1; transform: rotate(0deg) scale(1); }
          90% { opacity: 0.3; transform: rotate(-15deg) scale(1.4); }
          95% { opacity: 1; transform: rotate(8deg) scale(0.9); }
        }
        .anim-float { animation: float 3s ease-in-out infinite; }
        .anim-pulse { animation: pulse-node 3s ease-in-out infinite; }
        .anim-zap { animation: zap 3s ease-in-out infinite; }
      `}</style>

      {/* Floating circuit nodes */}
      <div className="pointer-events-none absolute inset-0">
        {PARTICLE_POSITIONS.map(([left, top], i) => {
          const size = 5 + (i % 4) * 3;
          const duration = `${2.5 + (i % 5) * 0.7}s`;
          const delay = `${(i * 0.35) % 3}s`;
          const color = NODE_COLORS[i % NODE_COLORS.length];
          const isSquare = i % 3 === 0;
          return (
            <span
              key={i}
              className="anim-pulse absolute"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: `${size}px`,
                height: `${size}px`,
                background: color,
                borderRadius: isSquare ? '1px' : '50%',
                animationDuration: duration,
                animationDelay: delay,
              }}
            />
          );
        })}
      </div>

      {/* Floating circuit board icon */}
      <div className="anim-float mb-5">
        <svg className="h-20 w-20" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
          {/* PCB board */}
          <rect
            x="8"
            y="8"
            width="56"
            height="56"
            rx="4"
            fill="#002E5D"
            stroke="#0062B8"
            strokeWidth="1.5"
          />

          {/* Circuit traces */}
          <line x1="20" y1="20" x2="52" y2="20" stroke="#4A90D9" strokeWidth="1" opacity="0.6" />
          <line x1="20" y1="36" x2="52" y2="36" stroke="#4A90D9" strokeWidth="1" opacity="0.6" />
          <line x1="20" y1="52" x2="52" y2="52" stroke="#4A90D9" strokeWidth="1" opacity="0.6" />
          <line x1="20" y1="20" x2="20" y2="52" stroke="#4A90D9" strokeWidth="1" opacity="0.6" />
          <line x1="36" y1="20" x2="36" y2="52" stroke="#4A90D9" strokeWidth="1" opacity="0.6" />
          <line x1="52" y1="20" x2="52" y2="52" stroke="#4A90D9" strokeWidth="1" opacity="0.6" />

          {/* Chip in center */}
          <rect
            x="27"
            y="27"
            width="18"
            height="18"
            rx="2"
            fill="#0062B8"
            stroke="#00A3E0"
            strokeWidth="1"
          />

          {/* Chip pins */}
          <line x1="27" y1="31" x2="22" y2="31" stroke="#FFB300" strokeWidth="1.2" />
          <line x1="27" y1="36" x2="22" y2="36" stroke="#FFB300" strokeWidth="1.2" />
          <line x1="27" y1="41" x2="22" y2="41" stroke="#FFB300" strokeWidth="1.2" />
          <line x1="45" y1="31" x2="50" y2="31" stroke="#FFB300" strokeWidth="1.2" />
          <line x1="45" y1="36" x2="50" y2="36" stroke="#FFB300" strokeWidth="1.2" />
          <line x1="45" y1="41" x2="50" y2="41" stroke="#FFB300" strokeWidth="1.2" />
          <line x1="31" y1="27" x2="31" y2="22" stroke="#FFB300" strokeWidth="1.2" />
          <line x1="36" y1="27" x2="36" y2="22" stroke="#FFB300" strokeWidth="1.2" />
          <line x1="41" y1="27" x2="41" y2="22" stroke="#FFB300" strokeWidth="1.2" />
          <line x1="31" y1="45" x2="31" y2="50" stroke="#FFB300" strokeWidth="1.2" />
          <line x1="36" y1="45" x2="36" y2="50" stroke="#FFB300" strokeWidth="1.2" />
          <line x1="41" y1="45" x2="41" y2="50" stroke="#FFB300" strokeWidth="1.2" />

          {/* Circuit node dots */}
          <circle cx="20" cy="20" r="2" fill="#00A3E0" />
          <circle cx="52" cy="20" r="2" fill="#00A3E0" />
          <circle cx="20" cy="52" r="2" fill="#00A3E0" />
          <circle cx="52" cy="52" r="2" fill="#00A3E0" />
          <circle cx="36" cy="36" r="2" fill="#FFB300" />
        </svg>
      </div>

      {/* Badge */}
      <span className="bg-byu-navy mb-5 inline-flex items-center gap-2 rounded-full border border-blue-700 px-4 py-1.5 text-xs tracking-widest text-blue-200 uppercase shadow-sm">
        <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
        Under construction
      </span>

      {/* Headline */}
      <h1 className="text-byu-navy text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        <span className="text-byu-royal">{pageName}</span> page is
        <br />
        <span className="text-slate-500">coming soon</span>{' '}
        <span className="anim-zap inline-block">⚡</span>
      </h1>

      {/* Divider */}
      <div className="my-5 flex items-center gap-3 text-blue-300 opacity-50">
        <div className="h-px w-14 bg-blue-400" />
        ◆
        <div className="h-px w-14 bg-blue-400" />
      </div>

      {/* Description */}
      <p className="text-byu-navy max-w-md text-center text-base italic sm:text-lg">
        Our engineers are still soldering this section together. Check back soon for more features.
        🔧⚡
      </p>

      <p className="mt-6 text-center text-xs text-blue-600/70">
        (In the meantime, feel free to explore the other pages that are already live.)
      </p>
    </div>
  );
}
