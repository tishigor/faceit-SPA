<template>
  <svg
      height="70"
      :width="width"
      :opacity="opacity"
  >
    <defs>
      <linearGradient
          id="gradientLoad"
          fy="0"
          gradientTransform="rotate(20 .5 .5)"
      >

        <stop
            offset="0"
            stop-color="#F1F6FE"
        />
        <stop
            offset=".25"
            stop-color="#FFFFFF"
        >
          <animate
              attributeName="offset"
              dur="3s"
              values="0;1;0"
              repeatCount="indefinite"
          />
        </stop>
        <stop
            offset="1"
            stop-color="#F1F6FE"
        />

      </linearGradient>
    </defs>
    <rect
        width="100%"
        height="35"
        x="0"
        y="0"
        rx="15"
        ry="15"
        fill="url(#gradientLoad)"
    />
    <rect
        width="65%"
        height="20"
        x="0"
        y="45"
        rx="10"
        ry="10"
        fill="url(#gradientLoad)"
    />
  </svg>
</template>

<script>
export default {
  name: 'LoaderComponent',
  props: {
    width: {
      type: [String, Number],
      default: '100%',
    },
    opacity: {
      type: [String, Number],
      default: '1',
    },
  },
};
</script>
