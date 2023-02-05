export interface FcmSubPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
