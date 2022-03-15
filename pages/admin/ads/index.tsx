/* eslint-disable @next/next/no-img-element */
import { gql, useMutation } from '@apollo/client'
import React from 'react'
import MUITable, { InputSchema } from '../../../components/MUITable'
import { Model } from '../../../types'
import { toast } from 'react-toastify'

export default function Index() {
  const [handleUpload] = useMutation<{ uploadFile: boolean }>(gql`
    mutation UploadFile($file: Upload, $path: String!) {
      uploadFile(file: $file, path: $path)
    }
  `)
  //@ts-ignore
  const schema: InputSchema<Model['Ads']> = [
    {
      name: 'name',
      label: 'Name',
    },
    {
      name: 'position',
      label: 'Position',
      type: 'select',
      selects: [
        'CHAPTER_BOTTOM',
        'CHAPTER_TOP',
        'COMIC_RECOMENDATION',
        'HOME_TOP_COMIC',
      ],
    },
    {
      name: 'url',
      label: 'Url',
    },
    {
      name: 'index',
      label: 'Index',
      type: 'number',
    },
    {
      //@ts-ignore
      name: 'image-type',
      label: 'Tipe Gambar File / URL',
      type: 'select',
      selects: ['File', 'URL'],
    },
    {
      name: 'image',
      label: 'Gambar Upload',
      type: 'file',
      dontRender: (e: { [x: string]: string }) => e['image-type'] === 'URL',
    },
    {
      name: 'image',
      label: 'Gambar URL',
      type: 'text',
      dontRender: (e: { [x: string]: string }) => e['image-type'] === 'File',
    },
  ]

  const modifier = async (e: { [x: string]: string; image: string }) => {
    const data = { ...e }

    try {
      if (e['image']) {
        const imagePath = `/images-backups/${data.name}.jpg`

        let file = null
        //@ts-ignore
        if (e['image-type'] === 'URL') {
          const f = await fetch(e.image)

          const blob = await f.blob()

          file = new File([blob], `${data.name}.jpg`, { type: 'image/jpeg' })
        } else {
          file = e.image
        }

        const { data: ul } = await handleUpload({
          variables: {
            file,
            path: imagePath,
          },
        })

        if (!ul?.uploadFile) {
          toast.error('Gagal Upload Gambar')
          throw Error('Gagal Upload Gambar')
        }

        data['image'] = 'https://cdn.gudangkomik.com' + imagePath
      }
    } catch (error) {
      toast.error('WARNING : Gagal Upload Gambar ' + error)
    }

    //@ts-ignore
    delete data['image-type']

    return data
  }

  return (
    <div>
      <MUITable<Model['Ads']>
        headcells={[
          {
            name: 'name',
            label: 'Name',
          },
          {
            name: 'position',
            label: 'Posisi',
          },
          {
            name: 'index',
            label: 'Index',
          },
          {
            name: 'url',
            label: 'URL',
          },
          {
            name: 'updatedAt',
            label: 'Berubah Pada',
          },
        ]}
        name={'Iklan'}
        keys={'findManyAds'}
        TooltipChildren={(row) => (
          <>
            <img src={row.image} height="100%" width="600px" alt={row.name} />
          </>
        )}
        countKeys={'findManyAdsCount'}
        countQuery={gql`
          query Query {
            findManyAdsCount
          }
        `}
        action={['edit', 'delete', 'create']}
        deleteQuery={gql`
          mutation DeleteManyAds($where: AdsWhereInput) {
            deleteManyAds(where: $where) {
              count
            }
          }
        `}
        createQuery={gql`
          mutation CreateOneAds($data: AdsCreateInput!) {
            createOneAds(data: $data) {
              id
              name
            }
          }
        `}
        createAction="schema"
        createDefaultValue={{
          position: 'CHAPTER_TOP',
          //@ts-ignore
          'image-type': 'URL',
        }}
        //@ts-ignore
        createSchema={schema}
        createModifier={modifier}
        query={gql`
          query FindManyAds(
            $where: AdsWhereInput
            $take: Int
            $skip: Int
            $orderBy: [AdsOrderByWithRelationInput]
          ) {
            findManyAds(
              where: $where
              take: $take
              skip: $skip
              orderBy: $orderBy
            ) {
              id
              name
              position
              image
              url
              index
              createdAt
              updatedAt
            }
          }
        `}
        editAction="schema"
        //@ts-ignore
        editSchema={schema}
        //@ts-ignore
        editModifier={modifier}
        editQuery={gql`
          mutation UpdateOneAds(
            $data: AdsUpdateInput!
            $where: AdsWhereUniqueInput!
          ) {
            updateOneAds(data: $data, where: $where) {
              id
              name
              position
              url
              image
              index
              createdAt
              updatedAt
            }
          }
        `}
      />
    </div>
  )
}
