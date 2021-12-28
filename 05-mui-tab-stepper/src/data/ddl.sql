-- DROP SEQUENCE public.baby_id_seq;

CREATE SEQUENCE public.baby_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- DROP SEQUENCE public.organization_id_seq;

CREATE SEQUENCE public.organization_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- DROP TABLE public.organization;

CREATE TABLE public.organization (
	id serial4 NOT NULL,
	"name" text NOT NULL,
	activated bool NOT NULL DEFAULT false,
	CONSTRAINT organization_name_key UNIQUE (name),
	CONSTRAINT organization_pkey PRIMARY KEY (id)
);

-- DROP TABLE public.baby;

CREATE TABLE public.baby (
	id int4 NOT NULL DEFAULT nextval('baby_id_seq'::regclass),
	"name" text NOT NULL,
	status int4 NULL DEFAULT 0,
	CONSTRAINT baby_name_key UNIQUE (name),
	CONSTRAINT baby_pkey PRIMARY KEY (id)
);

