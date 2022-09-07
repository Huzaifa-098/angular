let message;
message = "abc";
let endsWithC = (<string>message).endsWith("C");
let alternativeWay = (message as string).endsWith("c");
