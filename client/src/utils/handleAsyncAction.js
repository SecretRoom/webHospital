// функция определяющая тип асинхронный action,
// возвращает action c новым типом (SUCCESS, ERROR)
export default function handleAsyncActions(action) {
  if (action.subType) {
    const handleAction = { ...action };
    handleAction.type = `${action.type}${action.subType}`;
    return handleAction;
  }
  return action;
}
