import * as React from "react";

export const GitHubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

export const TwitterIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 209"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v209H0z" />
    <path
      fill="#55acee"
      d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
    />
  </svg>
);

export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const LinkArrow = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);


export const CircularText = ({ className, ...rest }) => (
  <svg
    width="496"
    height="496"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 514.72 531.38"
    xmlSpace="preserve"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <g id="Capa_2" data-name="Capa 2">
      <g id="Capa_1-2" data-name="Capa 1">
        <path
          d="m69.39 83.87-4.78-5.18 15.9-14.78 4.81 5.18Zm42.4 40q-7.73 7.19-15.78 6.75t-15.4-8.38l5.44-5.06q5.19 5.58 10.67 6t10.66-4.4q5-4.7 5-10.11t-5.28-11L77.89 66.32l5.41-5 29.12 31.33q7.41 8 7.22 16.06t-7.85 15.18ZM149.81 95.77q-6.85 3.72-12.73 1.78t-9.79-9.16l-15.14-27.86 6.89-3.74 15.14 27.87c1.55 2.84 3.53 4.6 6 5.27s5.09.23 8-1.35q5.22-2.84 6.14-7.5T151.1 68.8l8.34 10.22-2.63 1.42a13.09 13.09 0 0 1-.58 8.85 14.1 14.1 0 0 1-6.42 6.48Zm5.34-19.38L138.71 46.1l6.9-3.71 15.85 29.19Zm7.42 12-6.21-9.73-4-7.4 6.89-3.75 6 11.07 6.2-2.44 2.9 5.34ZM181.03 79.51l-11.61-46.6 6.9-1.72 3.16 9.67 9.13 36.76Zm29.67-7.39-7.56-30.38q-1.22-4.89-4.43-6.91a9.73 9.73 0 0 0-7.83-.87q-12.36 3.08-8.79 17.43l-5.73-11.23 3.47-.86a10.12 10.12 0 0 1 2.14-8q2.65-3.12 8.51-4.57 7.65-1.91 12.94 1.54t7.33 11.62l7.56 30.34ZM230.07 68.64l.11-6.62 19.75.32-.1 6.62Zm3.39-41.37.11-6.61 23.92.38-.11 6.62Zm19.87-15.36a5.76 5.76 0 0 1-4.18-1.81 5.66 5.66 0 0 1-1.7-4.22 6 6 0 1 1 12 .2 5.94 5.94 0 0 1-6.08 5.83Zm-4.41 57 .74-45.48 7.79.12-.74 45.49Zm6.89.12.1-6.62 16.22.26-.1 6.62ZM299.19 76.45q-9.46-2.49-13.05-10.2t-.53-19.17q3-11.52 10-16.42t16.38-2.4q9.51 2.52 13.08 10.19t.53 19.19q-3 11.48-9.94 16.4t-16.47 2.41Zm1.82-6.88a10.67 10.67 0 0 0 10.17-2.11q4.33-3.66 6.52-11.89t.21-13.56a11.61 11.61 0 0 0-18-4.75q-4.35 3.66-6.52 11.89t-.21 13.56a10.66 10.66 0 0 0 7.83 6.86ZM325.75 83.1l3.24-5.77 27.62 15.53-3.24 5.77Zm9.8 5.5 23.53-41.88 5.53 3.09-5.45 12.74-16.81 29.84Zm12.06-40.73 3.24-5.76 12.89 7.28-2.69 6Zm4.86 26.52 4.91-14.49 3.09 1.73q7.58-10.92 18.45-4.81c4.39 2.47 6.89 5.5 7.47 9.08s-.68 8.16-3.78 13.69l-6.8-3.82q2.91-5.17 2.56-8.39t-4-5.27a10.61 10.61 0 0 0-11.28 0q-5.58 3.28-10.62 12.28ZM407.75 146.79l54.62-34 3.9 6.27-54.62 34Zm3.56 5.74 6-3.74 8.05 12.93q3.45 5.53 7.88 7a10.3 10.3 0 0 0 9-1.39q4.85-3 5.59-7.77t-2.82-10.5l-7.76-12.46 2.31-2.72 9.29 14.93q5.06 8.11 4.19 14.79t-7.43 10.79q-7.11 4.42-13.72 2.48t-11.58-9.95Zm26.17-18.85 3-1.87 10.25 16.47-3 1.86Zm2.88.77 2.81-1.75 6.44 10.35q3.06 4.92 7 6.25a9.11 9.11 0 0 0 8-1.22 8.51 8.51 0 0 0 4.37-6.56q.42-4.11-2.75-9.18l-6.2-9.95 5.43-4.65 6.83 11q5.07 8.16 4.27 14.84t-7.38 10.81c-3.77 2.34-7.52 2.83-11.24 1.44s-7.11-4.52-10.16-9.42ZM436.09 202.64q-2.22-7-.07-11.95t8.2-6.79q7.26-2.28 12.7 1.81t8.54 14a62.51 62.51 0 0 1 2 8.06 26.83 26.83 0 0 1 .45 6.42l-5.75.28a27.45 27.45 0 0 0-1-6.46q-.92-3.35-1.93-6.59-4.09-13.1-12.4-10.5a6.46 6.46 0 0 0-4.42 3.86 10.44 10.44 0 0 0 .19 6.91 18.69 18.69 0 0 0 4 7.3 13.06 13.06 0 0 0 5.6 3.7 9.53 9.53 0 0 0 5.88.06l5.15-1.61-10.87 6.54-1.11-3.55 1.58.79a11.31 11.31 0 0 1-7-.17 13.33 13.33 0 0 1-5.77-4.32 23.51 23.51 0 0 1-3.97-7.79Zm5.77 16.9 14.88-5.38 1.88-1.58 11.16-3.5q5.83-1.83 7.4-6.16t-.57-11.64l-3-10.42 7-1.25 2.66 8.95q3.36 11.34.29 18.19t-12.63 9.85l-20.28 6.35 1.63 8.09-5.8 1.81ZM447.23 263.2q-.62-12.22 5.45-19.06t18.24-7.47q11.76-.61 18.6 5.28t7.43 17.44a24.93 24.93 0 0 1-2 11.92 15.08 15.08 0 0 1-7 7.37l-4.85-5.92a14.21 14.21 0 0 0 5.29-5.86 15.6 15.6 0 0 0 1.43-7.51q-.39-7.47-5.08-11.35t-13-3.47q-9 .47-13.41 5.36t-4 13.68a66 66 0 0 0 .72 6.91c.35 2.28.79 4.51 1.29 6.69l-6.92 1.27a52.06 52.06 0 0 1-1.55-7.59q-.44-3.94-.64-7.69ZM441.37 322.85l26.06-8.7 1.78 7.7-29.75 10.46Zm6.72-33.36 66.63 13.44-1.53 7.59-66.58-13.43Zm17.33 8.53 7 1.41-1.13 5.6a25.45 25.45 0 0 0-.11 11.42 15.34 15.34 0 0 0 5.55 8.14 42.31 42.31 0 0 0 12.06 6.2l-1.61 8q-14.29-5-20-13.08t-3.25-20.32ZM425.32 360.03q5.28-10.87 14.06-13.94t19.65 2.22q10.54 5.13 13.92 13t-1.06 17q-4.18 8.59-11.73 10.75t-17.4-2.67a47.34 47.34 0 0 1-4.78-2.63l15.12-31.09 5.62 2.73-12.06 24.82q6.39 3.1 11.33 1.78t7.54-6.71q2.91-6 .44-11.27t-9.93-8.91q-8-3.9-14.47-1.52t-10.41 10.53a46.21 46.21 0 0 0-2.22 5.35q-1 2.77-1.71 5.64l-6.76-2.18a62.86 62.86 0 0 1 2.26-6.91q1.28-3.29 2.59-5.99ZM393.31 407.02l23.86 20.27q3.84 3.25 7.62 3c2.53-.15 4.82-1.44 6.88-3.85q8.24-9.7-3-19.27l11.21 5.77-2.32 2.73a10.13 10.13 0 0 1 2.91 7.73q-.34 4.08-4.24 8.68-5.12 6-11.42 6.29t-12.73-5.16l-23.83-20.24Zm19.8-23.31 36.6 31.1-4.6 5.42-8.21-6-28.87-24.53ZM353.22 439.09l6.86 8 33.53 47.3-6.4 4.53-39.37-55.53Zm12.54-9.43q7.68-5.44 15.25-3.19t14.53 12.09q7.21 10.2 6.94 18.29t-8 13.55q-4.81 3.4-9.3 3.3a11.19 11.19 0 0 1-8-3.69l-2.89 2-5.48-12.61q4.81 6.81 10 8.41t10.41-2.12q5.25-3.72 5.24-9.46t-5.29-13.21q-5-7.1-10.33-8.82t-10.55 2q-5.2 3.69-5.42 9.08t4.61 12.2l-10.33-8.95 3.18-2.25a11.21 11.21 0 0 1-.94-8.74q1.33-4.33 6.37-7.88ZM284.17 466.2l.78 7-8.43.93q-10.57 1.17-15.23 7.77t-3.32 18.63q1.42 13 7.46 18.82t16.61 4.68l8.24-.91 1.86 6.91-9.32 1q-28.92 3.26-32.55-29.64-3.44-31.08 25.48-34.27Zm6.71-.74 7.07 64-7.34.81-7.07-64ZM215.61 465.45q12 1.69 17.6 9.09t3.94 19.38q-1.63 11.63-8.05 17.24t-16.43 4.23q-9.47-1.34-13.84-7.85t-2.84-17.37a48.79 48.79 0 0 1 1-5.35l34.24 4.81-.87 6.19-27.33-3.84q-1 7.05 1.8 11.33t8.78 5.08q6.59.93 10.86-3t5.41-12.19q1.25-8.83-3-14.24t-13.27-6.7a49.7 49.7 0 0 0-5.77-.47q-2.94-.07-5.9.11v-7.09a63.06 63.06 0 0 1 7.28 0q3.47.24 6.39.64ZM176.48 455.79l-1.87 51.24-7.7-3.19 2.41-43.79-.63-.26-29.24 32.66-7.7-3.19 35-37.5ZM124.85 425.33q9.66 7.28 11 16.47t-5.94 18.86q-7.06 9.38-15.4 11.19t-16.44-4.3q-7.65-5.76-8.31-13.57t5.92-16.59a48.34 48.34 0 0 1 3.49-4.18L126.79 454l-3.76 5-22-16.6q-4.27 5.69-3.91 10.78t5.14 8.69q5.33 4 11 2.6t10.64-8q5.37-7.14 4.27-13.92t-8.34-12.23a49.2 49.2 0 0 0-4.82-3.21c-1.7-1-3.43-1.91-5.21-2.76l3.42-6.21a63.79 63.79 0 0 1 6.36 3.54q2.89 1.85 5.27 3.65ZM87.51 386.84q5.14 6.44 4.09 12.19t-8.41 11.63l-39.52 31.63-4.87-6.09 39.27-31.42a18.62 18.62 0 0 0 4.46-4.79 6.8 6.8 0 0 0 .89-4.92 14.07 14.07 0 0 0-3.08-5.8 36.37 36.37 0 0 0-7.13-6.37l4.85-5a43.41 43.41 0 0 1 5 4.1 50.09 50.09 0 0 1 4.45 4.84ZM58 449.62l-5.16 4.13-9.68-12.1 5.16-4.13ZM66.52 350.57q4 8.93.3 16.57t-14.54 12.5q-10.87 4.89-19 2.6t-12.21-11.21q-4-9-.33-16.57t14.58-12.5q10.82-4.87 19-2.61t12.2 11.22Zm-6.48 2.92a10.67 10.67 0 0 0-8.05-6.56c-3.72-.71-8.16.09-13.34 2.43s-8.74 5.12-10.67 8.37a11.61 11.61 0 0 0 7.63 16.94q5.56 1.08 13.34-2.42t10.66-8.38a10.68 10.68 0 0 0 .43-10.38ZM31.37 310.48l-14.35 5.3-.6-3.48q-13.25 1-15.35-11.3-1.28-7.47 2.35-11.53t13-5.67l1.32 7.68q-5.85 1-8.13 3.3c-1.51 1.53-2 3.68-1.56 6.45a10.61 10.61 0 0 0 7.14 8.73q6.05 2.25 16.18.52Zm21.68 4.2-47.34 8.09-1.1-6.21 13.32-3.79L51.7 307Zm-39.23 16.27-6.52 1.11-2.49-14.56 6.41-1.74Zm41.13-5.19-6.52 1.11-5.35-31.26 6.53-1.12ZM50.1 248.11q-1 12.06-8 18.11t-19.14 5.07q-11.7-.94-17.69-7T.1 248.1q.77-9.52 7-14.28t17.18-3.86a47.86 47.86 0 0 1 5.4.71l-2.77 34.44-6.23-.5 2.21-27.51q-7.08-.57-11.2 2.46t-4.58 9q-.54 6.63 3.68 10.66t12.49 4.69q8.89.72 14-3.85t5.87-13.59a50.58 50.58 0 0 0 .12-5.79q-.11-2.94-.46-5.88l7.09-.43a63.11 63.11 0 0 1 .41 7.26q.03 3.51-.21 6.48ZM13 210.11l-6.25-2.16 4.84-14 6.46 1.57Zm42.22 4.65L9.84 199.04l2.06-6 13.5 3.1 32.37 11.25Zm-17-14.12-15.11-2.25 1.16-3.34q-12.09-5.53-8-17.31 2.48-7.14 7.62-9t14.13 1.29l-2.57 7.36q-5.61-2-8.7-1c-2.07.61-3.56 2.25-4.48 4.9a10.62 10.62 0 0 0 2.05 11.1q4.22 4.88 13.93 8.25Zm13.32 24.75-6.25-2.16 10.38-30 6.26 2.16Z"
          className="cls-1"
        />
      </g>
    </g>
  </svg>
)

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);
