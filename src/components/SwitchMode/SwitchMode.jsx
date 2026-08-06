import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { IoMoon, IoMoonOutline, IoSunny, IoSunnyOutline } from "react-icons/io5";
import "./SwitchMode.css";

export const SwitchMode = ({
  width = 128,
  height = 64,
  darkColor = "#0B0B0B",
  lightColor = "#FFFFFF",
  knobDarkColor = "#2A2A2E",
  knobLightColor = "#F3F2F7",
  borderDarkColor = "#4C4C50",
  borderLightColor = "#D8D6E0",
  theme = "light",
  setTheme,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  if (!mounted) {
    return (
      <div
        style={{ width, height }}
        className="switchmode-placeholder"
      />
    );
  }

  const isDark = theme === "dark";
  const iconSize = height * 0.45;

  return (
    <motion.button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="switchmode-button"
      style={{
        width,
        height,
        borderColor: isDark ? borderDarkColor : borderLightColor,
      }}
    >
      <motion.div
        className="switchmode-track"
        animate={{ backgroundColor: isDark ? darkColor : lightColor }}
        transition={{ duration: 0.4 }}
      />

      <motion.div
        layout
        layoutId="switch-knob"
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="switchmode-knob"
        style={{
          width: height,
          height,
          right: isDark ? -2 : undefined,
          left: isDark ? undefined : -2,
          backgroundColor: isDark ? knobDarkColor : knobLightColor,
          borderColor: isDark ? borderDarkColor : borderLightColor,
        }}
      />

      <motion.div
        className="switchmode-icon"
        style={{ width: height, height }}
        animate={{ rotate: isDark ? 45 : 0 }}
        transition={{ stiffness: 20 }}
      >
        {isDark ? (
          <IoSunnyOutline
            color="#8A8A8F"
            fill="#8A8A8F"
            stroke="#8A8A8F"
            style={{ width: iconSize, height: iconSize }}
            className="switchmode-icon-inner"
          />
        ) : (
          <IoSunny
            color="#686771"
            fill="#686771"
            style={{ width: iconSize, height: iconSize }}
            className="switchmode-icon-inner"
          />
        )}
      </motion.div>

      <motion.div
        className="switchmode-icon"
        style={{ width: height, height }}
        animate={{ rotate: isDark ? 0 : 15 }}
        transition={{ stiffness: 20, damping: 14 }}
      >
        {isDark ? (
          <IoMoon
            color="#F4F4FB"
            fill="#F4F4FB"
            style={{ width: iconSize, height: iconSize }}
            className="switchmode-icon-inner"
          />
        ) : (
          <IoMoonOutline
            color="#ABABB4"
            fill="#ABABB4"
            stroke="#ABABB4"
            style={{ width: iconSize, height: iconSize }}
            className="switchmode-icon-inner"
          />
        )}
      </motion.div>
    </motion.button>
  );
};
