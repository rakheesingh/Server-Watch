
export function getTypeColor(type) {
    switch (type) {
      case "Critical":
        return "border-red-500";
      case "Warning":
        return "border-yellow-500";
      case "Info":
        return "border-blue-500";
      default:
        return "border-gray-500";
    }
  }