export type clientRequest = {
  user_id: string;
  profile : {
    first_name: string | undefined;
    last_name: string | undefined;
    phone_number?: string;
    address?: string;
    city?: string;
    country?: string;
    description?: string;
    created_at?: Date;
    modified_at?: Date;
  }
}