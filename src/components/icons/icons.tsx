//
//
//

import languages_ARR from "@/src/constants/languages";
import { MyColors } from "@/src/constants/MyColors";
import { Image, StyleSheet, View } from "react-native";
import Svg, { Path, Circle, Rect } from "react-native-svg";

const sizing = {
  normal: 24,
  small: 20,
};

export function ICON_flag({
  big = false,
  lang = "en",
}: {
  big?: boolean;
  lang?: "string";
}) {
  const _size = big
    ? { width: sizing.small, height: 14 }
    : { width: sizing.normal, height: 11 };

  const targetLang = languages_ARR.find((l) => l.id === lang);

  return (
    <Image style={[_size, { borderRadius: 2 }]} source={targetLang?.image} />
  );
}
export function ICON_difficultyDot({
  big = false,
  difficulty = 2,
  primary = false,
}: {
  big?: boolean;
  difficulty?: 1 | 2 | 3;
  primary?: boolean;
}) {
  const _size = big ? { width: 14, height: 14 } : { width: 11, height: 11 };

  const _color = primary
    ? { backgroundColor: MyColors.icon_primary }
    : difficulty === 1
    ? { backgroundColor: MyColors.icon_difficulty_1 }
    : difficulty === 2
    ? { backgroundColor: MyColors.icon_difficulty_2 }
    : { backgroundColor: MyColors.icon_difficulty_3 };

  return (
    <View
      style={{
        width: sizing.small,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={[_size, _color, { borderRadius: 100 }]} />
    </View>
  );
}
export function ICON_X({
  color = "grey",
  big = false,
  rotate = false,
}: {
  color?: "grey" | "primary";
  big?: boolean;
  rotate?: boolean;
}) {
  const rotateStyle = rotate
    ? { transform: [{ rotate: "45deg" }] }
    : { transform: [{ rotate: "0deg" }] };
  const line_1_styles = [
    s.x_line,
    big && s.x_line_big,
    color === "primary" && s.x_line_primary,
  ];
  const line_2_styles = [
    s.x_line,
    big && s.x_line_big,
    color === "primary" && s.x_line_primary,
    s.x_line_rotate,
  ];

  return (
    <View style={[s.icon, rotateStyle]}>
      <View style={line_1_styles}></View>
      <View style={line_2_styles}></View>
    </View>
  );
}
export function ICON_arrowBack() {
  return (
    <Svg
      viewBox="0 0 22 12"
      width={sizing.normal}
      height={sizing.normal}
      fill="none"
    >
      <Path
        d="M20.5 6.8C20.9418 6.8 21.3 6.44183 21.3 6C21.3 5.55817 20.9418 5.2 20.5 5.2V6.8ZM0.934315 5.43431C0.621895 5.74673 0.621895 6.25327 0.934315 6.56569L6.02548 11.6569C6.3379 11.9693 6.84443 11.9693 7.15685 11.6569C7.46927 11.3444 7.46927 10.8379 7.15685 10.5255L2.63137 6L7.15685 1.47452C7.46927 1.1621 7.46927 0.655565 7.15685 0.343146C6.84443 0.0307264 6.3379 0.0307264 6.02548 0.343146L0.934315 5.43431ZM20.5 5.2L1.5 5.2V6.8L20.5 6.8V5.2Z"
        fill={MyColors.icon_gray_light}
      />
    </Svg>
  );
}
export function ICON_3dots() {
  return (
    <Svg
      width={sizing.normal}
      height={sizing.normal}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Circle cx="4" cy="12" r="2.5" fill={MyColors.icon_gray_light} />
      <Circle cx="12" cy="12" r="2.5" fill={MyColors.icon_gray_light} />
      <Circle cx="20" cy="12" r="2.5" fill={MyColors.icon_gray_light} />
    </Svg>
  );
}
export function ICON_profile({
  color = "grey",
}: {
  color?: "grey" | "primary";
}) {
  return (
    <Svg
      width={sizing.normal}
      height={sizing.normal}
      viewBox="0 0 22 22"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 2.6C9.5308 2.59973 8.08722 2.98481 6.81336 3.71681C5.53949 4.44881 4.47989 5.50211 3.74032 6.7716C3.00076 8.04109 2.60709 9.48235 2.59861 10.9515C2.59013 12.4207 2.96714 13.8664 3.69201 15.1443C4.18195 14.5076 4.81176 13.9921 5.53275 13.6376C6.25373 13.2831 7.04658 13.0992 7.85 13.1H14.15C14.9534 13.0992 15.7463 13.2831 16.4673 13.6376C17.1882 13.9921 17.8181 14.5076 18.308 15.1443C19.0329 13.8664 19.4099 12.4207 19.4014 10.9515C19.3929 9.48235 18.9992 8.04109 18.2597 6.7716C17.5201 5.50211 16.4605 4.44881 15.1866 3.71681C13.9128 2.98481 12.4692 2.59973 11 2.6ZM19.3401 17.3798C19.4717 17.2083 19.5977 17.0326 19.7181 16.8527C20.8822 15.123 21.5027 13.0849 21.5 11C21.5 5.20085 16.7991 0.5 11 0.5C5.20086 0.5 0.500011 5.20085 0.500011 11C0.496702 13.3066 1.25605 15.5496 2.65986 17.3798L2.65461 17.3987L3.02736 17.8323C4.01214 18.9837 5.23486 19.9078 6.61125 20.541C7.98764 21.1741 9.48496 21.5013 11 21.5C11.2268 21.5 11.4522 21.493 11.6762 21.479C13.5708 21.3595 15.3971 20.7261 16.9587 19.6467C17.7056 19.1315 18.3826 18.5216 18.9726 17.8323L19.3454 17.3987L19.3401 17.3798ZM11 4.7C10.1646 4.7 9.36336 5.03187 8.77262 5.62261C8.18188 6.21335 7.85 7.01457 7.85 7.85C7.85 8.68543 8.18188 9.48665 8.77262 10.0774C9.36336 10.6681 10.1646 11 11 11C11.8354 11 12.6366 10.6681 13.2274 10.0774C13.8181 9.48665 14.15 8.68543 14.15 7.85C14.15 7.01457 13.8181 6.21335 13.2274 5.62261C12.6366 5.03187 11.8354 4.7 11 4.7Z"
        fill={
          color === "grey" ? MyColors.icon_gray_light : MyColors.icon_primary
        }
      />
    </Svg>
  );
}
export function ICON_vocabs({
  color = "grey",
}: {
  color?: "grey" | "primary";
}) {
  return (
    <Svg
      width={sizing.normal}
      height={sizing.normal}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Rect
        x="2"
        y="2.5"
        width="9"
        height="8.5"
        rx="3"
        fill={
          color === "grey" ? MyColors.icon_gray_light : MyColors.icon_primary
        }
      />
      <Rect
        x="13"
        y="2.5"
        width="9"
        height="8.5"
        rx="3"
        fill={
          color === "grey" ? MyColors.icon_gray_light : MyColors.icon_primary
        }
      />
      <Rect
        x="2"
        y="13"
        width="9"
        height="8.5"
        rx="3"
        fill={
          color === "grey" ? MyColors.icon_gray_light : MyColors.icon_primary
        }
      />
      <Rect
        x="13"
        y="13"
        width="9"
        height="8.5"
        rx="3"
        fill={
          color === "grey" ? MyColors.icon_gray_light : MyColors.icon_primary
        }
      />
    </Svg>
  );
}
export function ICON_other({ color = "grey" }: { color?: "grey" | "primary" }) {
  const _color =
    color === "grey" ? MyColors.icon_gray_light : MyColors.icon_primary;
  return (
    <Svg
      width={sizing.normal}
      height={sizing.normal}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Circle cx="3" cy="4" r="2.5" fill={_color} />
      <Circle cx="12" cy="4" r="2.5" fill={_color} />
      <Circle cx="21" cy="4" r="2.5" fill={_color} />
      <Circle cx="3" cy="12" r="2.5" fill={_color} />
      <Circle cx="12" cy="12" r="2.5" fill={_color} />
      <Circle cx="21" cy="12" r="2.5" fill={_color} />
      <Circle cx="3" cy="20" r="2.5" fill={_color} />
      <Circle cx="12" cy="20" r="2.5" fill={_color} />
      <Circle cx="21" cy="20" r="2.5" fill={_color} />
    </Svg>
  );
}
export function ICON_search({
  color = "grey_light",
  big = true,
}: {
  color?: "grey" | "grey_light" | "primary";
  big?: boolean;
}) {
  return (
    <Svg
      width={big ? sizing.normal : sizing.small}
      height={big ? sizing.normal : sizing.small}
      viewBox="0 0 22 22"
      fill="none"
    >
      <Path
        d="M21.1781 19.3921L16.4175 14.6315C17.5637 13.1057 18.1824 11.2485 18.1803 9.34016C18.1803 4.46573 14.2146 0.5 9.34016 0.5C4.46573 0.5 0.5 4.46573 0.5 9.34016C0.5 14.2146 4.46573 18.1803 9.34016 18.1803C11.2485 18.1824 13.1057 17.5637 14.6315 16.4175L19.3921 21.1781C19.6331 21.3936 19.9474 21.5085 20.2705 21.4995C20.5936 21.4905 20.901 21.3581 21.1295 21.1295C21.3581 20.901 21.4905 20.5936 21.4995 20.2705C21.5085 19.9474 21.3936 19.6331 21.1781 19.3921ZM3.02576 9.34016C3.02576 8.09129 3.39609 6.87047 4.08993 5.83207C4.78376 4.79367 5.76994 3.98434 6.92374 3.50642C8.07755 3.02849 9.34716 2.90345 10.572 3.14709C11.7969 3.39073 12.922 3.99212 13.8051 4.8752C14.6882 5.75829 15.2896 6.88341 15.5332 8.10828C15.7769 9.33315 15.6518 10.6028 15.1739 11.7566C14.696 12.9104 13.8867 13.8966 12.8483 14.5904C11.8099 15.2842 10.589 15.6546 9.34016 15.6546C7.66609 15.6526 6.06117 14.9866 4.87742 13.8029C3.69368 12.6192 3.02777 11.0142 3.02576 9.34016Z"
        fill={
          color === "grey"
            ? MyColors.icon_gray
            : color === "grey_light"
            ? MyColors.icon_gray_light
            : MyColors.icon_primary
        }
      />
    </Svg>
  );
}
export function ICON_calendar({
  color = "grey",
}: {
  color?: "grey" | "primary";
}) {
  return (
    <Svg
      width={sizing.small}
      height={sizing.small}
      viewBox="0 0 18 18"
      fill="none"
    >
      <Path
        d="M0.900024 16.3125C0.900024 17.2441 1.67748 18 2.63574 18H15.3643C16.3226 18 17.1 17.2441 17.1 16.3125V6.75H0.900024V16.3125ZM3.21431 9.5625C3.21431 9.25313 3.47467 9 3.79288 9H7.26431C7.58252 9 7.84288 9.25313 7.84288 9.5625V12.9375C7.84288 13.2469 7.58252 13.5 7.26431 13.5H3.79288C3.47467 13.5 3.21431 13.2469 3.21431 12.9375V9.5625ZM15.3643 2.25H13.6286V0.5625C13.6286 0.253125 13.3682 0 13.05 0H11.8929C11.5747 0 11.3143 0.253125 11.3143 0.5625V2.25H6.68574V0.5625C6.68574 0.253125 6.42538 0 6.10717 0H4.95002C4.63181 0 4.37145 0.253125 4.37145 0.5625V2.25H2.63574C1.67748 2.25 0.900024 3.00586 0.900024 3.9375V5.625H17.1V3.9375C17.1 3.00586 16.3226 2.25 15.3643 2.25Z"
        fill={
          color === "grey" ? MyColors.icon_gray_light : MyColors.icon_primary
        }
      />
    </Svg>
  );
}
export function ICON_shuffle({
  color = "grey_light",
}: {
  color?: "grey" | "grey_light" | "primary";
}) {
  return (
    <Svg
      width={sizing.small}
      height={sizing.small}
      viewBox="0 0 20 18"
      fill="none"
    >
      <Path
        d="M15.4498 0.593156C15.8924 0.403481 16.3977 0.509699 16.7371 0.854908L19.0977 3.28276C19.319 3.51037 19.4444 3.81764 19.4444 4.14009C19.4444 4.46254 19.319 4.76981 19.0977 4.99742L16.7371 7.42527C16.3977 7.77428 15.8924 7.8767 15.4498 7.68702C15.0071 7.49735 14.7194 7.0573 14.7194 6.56415V5.35022H13.5391C13.1666 5.35022 12.8162 5.52852 12.5949 5.83579L11.0309 7.98671L9.55552 5.96477L10.7063 4.38667C11.374 3.46864 12.4252 2.92996 13.5391 2.92996H14.7194V1.71604C14.7194 1.22667 15.0071 0.782832 15.4498 0.593156ZM6.60471 10.0124L8.08011 12.0344L6.9293 13.6125C6.26168 14.5305 5.21045 15.0692 4.09652 15.0692H1.73587C1.083 15.0692 0.555542 14.5267 0.555542 13.8553C0.555542 13.1838 1.083 12.6414 1.73587 12.6414H4.09652C4.46906 12.6414 4.81947 12.4631 5.04078 12.1558L6.60471 10.0124ZM16.7334 17.1443C16.394 17.4933 15.8887 17.5957 15.4461 17.406C15.0035 17.2163 14.7158 16.7763 14.7158 16.2831V15.0692H13.5354C12.4215 15.0692 11.3703 14.5305 10.7027 13.6125L5.04078 5.84338C4.81947 5.5361 4.46906 5.35781 4.09652 5.35781H1.73587C1.083 5.35781 0.555542 4.81534 0.555542 4.14388C0.555542 3.47243 1.083 2.92996 1.73587 2.92996H4.09652C5.21045 2.92996 6.26168 3.46864 6.9293 4.38667L12.5949 12.1558C12.8162 12.4631 13.1666 12.6414 13.5391 12.6414H14.7194V11.4274C14.7194 10.9381 15.0071 10.4942 15.4498 10.3045C15.8924 10.1149 16.3977 10.2211 16.7371 10.5663L19.0977 12.9941C19.319 13.2218 19.4444 13.529 19.4444 13.8515C19.4444 14.1739 19.319 14.4812 19.0977 14.7088L16.7371 17.1367L16.7334 17.1443Z"
        fill={
          color === "grey"
            ? MyColors.icon_gray
            : color === "grey_light"
            ? MyColors.icon_gray_light
            : MyColors.icon_primary
        }
      />
    </Svg>
  );
}
export function ICON_dropdownArrow() {
  return (
    <Svg width={10} height={10} viewBox="0 0 8 7" fill="none">
      <Path
        d="M4.86603 6.5C4.48113 7.16667 3.51888 7.16667 3.13397 6.5L0.5359 2C0.150999 1.33333 0.632124 0.5 1.40192 0.5L6.59807 0.499999C7.36787 0.499999 7.849 1.33333 7.4641 2L4.86603 6.5Z"
        fill={MyColors.icon_gray_light}
      />
    </Svg>
  );
}
export function ICON_displaySettings() {
  return (
    <Svg
      width={sizing.normal}
      height={sizing.normal}
      viewBox="0 0 16 18"
      fill="none"
    >
      <Path
        d="M5 2.00001C4.73478 2.00001 4.48043 2.10537 4.29289 2.2929C4.10536 2.48044 4 2.73479 4 3.00001C4 3.26523 4.10536 3.51958 4.29289 3.70712C4.48043 3.89465 4.73478 4.00001 5 4.00001C5.26522 4.00001 5.51957 3.89465 5.70711 3.70712C5.89464 3.51958 6 3.26523 6 3.00001C6 2.73479 5.89464 2.48044 5.70711 2.2929C5.51957 2.10537 5.26522 2.00001 5 2.00001ZM2.17 2.00001C2.3766 1.41448 2.75974 0.907443 3.2666 0.548799C3.77346 0.190154 4.37909 -0.00244141 5 -0.00244141C5.62091 -0.00244141 6.22654 0.190154 6.7334 0.548799C7.24026 0.907443 7.6234 1.41448 7.83 2.00001H15C15.2652 2.00001 15.5196 2.10537 15.7071 2.2929C15.8946 2.48044 16 2.73479 16 3.00001C16 3.26523 15.8946 3.51958 15.7071 3.70712C15.5196 3.89465 15.2652 4.00001 15 4.00001H7.83C7.6234 4.58554 7.24026 5.09258 6.7334 5.45122C6.22654 5.80986 5.62091 6.00246 5 6.00246C4.37909 6.00246 3.77346 5.80986 3.2666 5.45122C2.75974 5.09258 2.3766 4.58554 2.17 4.00001H1C0.734784 4.00001 0.48043 3.89465 0.292893 3.70712C0.105357 3.51958 0 3.26523 0 3.00001C0 2.73479 0.105357 2.48044 0.292893 2.2929C0.48043 2.10537 0.734784 2.00001 1 2.00001H2.17ZM11 8.00001C10.7348 8.00001 10.4804 8.10537 10.2929 8.2929C10.1054 8.48044 10 8.73479 10 9.00001C10 9.26523 10.1054 9.51958 10.2929 9.70712C10.4804 9.89465 10.7348 10 11 10C11.2652 10 11.5196 9.89465 11.7071 9.70712C11.8946 9.51958 12 9.26523 12 9.00001C12 8.73479 11.8946 8.48044 11.7071 8.2929C11.5196 8.10537 11.2652 8.00001 11 8.00001ZM8.17 8.00001C8.3766 7.41448 8.75974 6.90744 9.2666 6.5488C9.77346 6.19015 10.3791 5.99756 11 5.99756C11.6209 5.99756 12.2265 6.19015 12.7334 6.5488C13.2403 6.90744 13.6234 7.41448 13.83 8.00001H15C15.2652 8.00001 15.5196 8.10537 15.7071 8.2929C15.8946 8.48044 16 8.73479 16 9.00001C16 9.26523 15.8946 9.51958 15.7071 9.70712C15.5196 9.89465 15.2652 10 15 10H13.83C13.6234 10.5855 13.2403 11.0926 12.7334 11.4512C12.2265 11.8099 11.6209 12.0025 11 12.0025C10.3791 12.0025 9.77346 11.8099 9.2666 11.4512C8.75974 11.0926 8.3766 10.5855 8.17 10H1C0.734784 10 0.48043 9.89465 0.292893 9.70712C0.105357 9.51958 0 9.26523 0 9.00001C0 8.73479 0.105357 8.48044 0.292893 8.2929C0.48043 8.10537 0.734784 8.00001 1 8.00001H8.17ZM5 14C4.73478 14 4.48043 14.1054 4.29289 14.2929C4.10536 14.4804 4 14.7348 4 15C4 15.2652 4.10536 15.5196 4.29289 15.7071C4.48043 15.8947 4.73478 16 5 16C5.26522 16 5.51957 15.8947 5.70711 15.7071C5.89464 15.5196 6 15.2652 6 15C6 14.7348 5.89464 14.4804 5.70711 14.2929C5.51957 14.1054 5.26522 14 5 14ZM2.17 14C2.3766 13.4145 2.75974 12.9074 3.2666 12.5488C3.77346 12.1902 4.37909 11.9976 5 11.9976C5.62091 11.9976 6.22654 12.1902 6.7334 12.5488C7.24026 12.9074 7.6234 13.4145 7.83 14H15C15.2652 14 15.5196 14.1054 15.7071 14.2929C15.8946 14.4804 16 14.7348 16 15C16 15.2652 15.8946 15.5196 15.7071 15.7071C15.5196 15.8947 15.2652 16 15 16H7.83C7.6234 16.5855 7.24026 17.0926 6.7334 17.4512C6.22654 17.8099 5.62091 18.0025 5 18.0025C4.37909 18.0025 3.77346 17.8099 3.2666 17.4512C2.75974 17.0926 2.3766 16.5855 2.17 16H1C0.734784 16 0.48043 15.8947 0.292893 15.7071C0.105357 15.5196 0 15.2652 0 15C0 14.7348 0.105357 14.4804 0.292893 14.2929C0.48043 14.1054 0.734784 14 1 14H2.17Z"
        fill={MyColors.icon_gray_light}
      />
    </Svg>
  );
}
export function ICON_image() {
  return (
    <Svg width={50} height={50} viewBox="0 0 37 38" fill="none">
      <Path
        d="M4.11111 37.5C2.98056 37.5 2.01307 37.0978 1.20867 36.2934C0.404259 35.489 0.00137037 34.5208 0 33.3889V4.61111C0 3.48056 0.402889 2.51307 1.20867 1.70867C2.01444 0.904259 2.98193 0.50137 4.11111 0.5H32.8889C34.0194 0.5 34.9876 0.902889 35.7934 1.70867C36.5992 2.51444 37.0014 3.48193 37 4.61111V33.3889C37 34.5194 36.5978 35.4876 35.7934 36.2934C34.989 37.0992 34.0208 37.5014 32.8889 37.5H4.11111ZM6.16667 29.2778H30.8333L23.125 19L16.9583 27.2222L12.3333 21.0556L6.16667 29.2778Z"
        fill={MyColors.icon_gray}
      />
    </Svg>
  );
}

const s = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  x_line: {
    height: 16,
    width: 2,
    position: "absolute",
    borderRadius: 100,
    backgroundColor: MyColors.icon_gray_light,
  },
  x_line_big: {
    height: 20,
    width: 3,
  },
  x_line_primary: {
    backgroundColor: MyColors.icon_primary,
  },
  x_line_rotate: {
    transform: [{ rotate: "90deg" }],
  },
});
