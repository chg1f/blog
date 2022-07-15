import React, {useState} from 'react'
import {Link, useStaticQuery, graphql} from "gatsby"

import {useFlexSearch} from 'react-use-flexsearch'
import {Formik, Form, Field} from 'formik'


const Search = () => {
  const queryData = useStaticQuery(graphql`
    query {
      localSearchPages {
        index
        store
      }
    }
  `)
  const [query, setQuery] = useState(null)
  const results = useFlexSearch(
    query,
    queryData.localSearchPages.index,
    queryData.localSearchPages.store,
  )

  return (
    <div>
      <Formik
        initialValues={{query: ''}}
        onSubmit={(values, {setSubmitting}) => {
          setQuery(values.query)
          setSubmitting(false)
        }}
      >
        <Form>
          <Field name="query" placeholder="search..." />
        </Form>
      </Formik>
      <ol style={{listStyle: `none`}}>
        {results.map(result => (
          <li key={result.slug}>
            <article
              className="post-list-item"
              itemScope
              itemType="http://schema.org/Article"
            >
              <header>
                <h2>
                  <Link to={result.slug} itemProp="url">
                    <span itemProp="headline">{result.title || result.slug}</span>
                  </Link>
                </h2>
                <small>
                  {result.date} {result.tags.join(";")}
                </small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: result.description || result.excerpt,
                  }}
                  itemProp="description"
                />
              </section>
            </article>
          </li>
        ))}
      </ol>
      {query && <small>{results.length} found</small>}
    </div>
  )
}


export default Search
