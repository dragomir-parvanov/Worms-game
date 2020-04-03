export default function isNicknameValid(nickname: string): boolean {
  if (nickname.trim().length > 3 && nickname.trim().length < 10) {
    return true;
  } else {
    return false;
  }
}
